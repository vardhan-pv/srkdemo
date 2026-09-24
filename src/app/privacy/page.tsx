import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy | SRK Interiors",
  description: "Privacy Policy for SRK Interiors — how we collect and use your information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="with-header section-py">
      <div className="container max-w-3xl">
        <h1 className="mb-6">Privacy Policy</h1>
        <p className="text-[#6b6b6b] mb-8">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">About This Policy</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              This Privacy Policy describes how {BUSINESS.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
              located at {BUSINESS.address.full}, collects and uses information provided through this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Information We Collect</h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-3">
              When you submit a consultation request through our contact form, we collect:
            </p>
            <ul className="list-disc list-inside text-[#4a4a4a] space-y-2">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your interior design requirement</li>
              <li>Any additional message you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">How We Use Your Information</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              We use your information solely to:
            </p>
            <ul className="list-disc list-inside text-[#4a4a4a] space-y-2 mt-3">
              <li>Contact you regarding your interior design enquiry</li>
              <li>Provide you with a free consultation and quotation</li>
              <li>Respond to your questions and requests</li>
            </ul>
            <p className="text-[#4a4a4a] leading-relaxed mt-3">
              We do not sell, share, or transfer your information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Analytics</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              This website may use Google Analytics 4 to understand how visitors interact with the
              site. This collects anonymized data such as page views and click events. No personally
              identifiable information is collected through analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">WhatsApp</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              When you click WhatsApp links on this site, you are directed to WhatsApp&apos;s service.
              WhatsApp&apos;s own privacy policy applies to that communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Data Security</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              We take reasonable steps to protect your information. Form submissions are transmitted
              securely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Contact Us</h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              For any questions about this Privacy Policy, please contact:
            </p>
            <div className="mt-3 text-[#4a4a4a]">
              <p className="font-semibold">{BUSINESS.name}</p>
              <p>{BUSINESS.address.full}</p>
              <p>Phone: {BUSINESS.phoneDisplay}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e7e2d8]">
          <Link href="/" className="text-[#c99a3d] hover:text-[#a97822] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
