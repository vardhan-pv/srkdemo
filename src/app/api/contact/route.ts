import { NextRequest, NextResponse } from "next/server";

// Simple rate limiting store (in-memory — replace with Redis for production scale)
const submissionStore = new Map<string, number[]>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3;

  const timestamps = submissionStore.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) {
    return false; // Rate limited
  }

  recent.push(now);
  submissionStore.set(ip, recent);
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .substring(0, 500);
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().+]/g, "");
  return /^[\d]{8,15}$/.test(cleaned);
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit check
    if (!getRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, requirement, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || !validatePhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (!requirement || typeof requirement !== "string") {
      return NextResponse.json(
        { error: "Requirement is required" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      requirement: sanitizeInput(requirement),
      message: message ? sanitizeInput(String(message)) : "",
      submittedAt: new Date().toISOString(),
      source: "website_contact_form",
    };

    // === LEAD DELIVERY ===
    // Option 1: Log to console (always active — visible in server logs)
    console.log("[SRK INTERIORS LEAD]", sanitizedData);

    // Option 2: Send to email via environment variable (configure with real SMTP)
    // const emailResult = await sendEmail(sanitizedData);

    // Option 3: Webhook to CRM or notification service
    // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    // if (webhookUrl) await fetch(webhookUrl, { method: "POST", body: JSON.stringify(sanitizedData) });

    // TODO: Implement production lead delivery:
    // - Add SMTP email sending (e.g., Resend, SendGrid, Nodemailer)
    // - Or forward to WhatsApp Business API
    // - Or save to database (Supabase, PlanetScale, etc.)
    // For now: leads are logged to server console and can be seen in hosting logs

    return NextResponse.json(
      {
        success: true,
        message: "Request received. We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
