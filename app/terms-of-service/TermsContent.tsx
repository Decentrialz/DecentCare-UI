"use client";

import { useState } from "react";
import { AlertTriangle, Check, Menu } from "lucide-react";
import TableOfContents, { type TocItem } from "@/app/privacy-policy/TableOfContents";
import SharedLegalContactSection from "@/app/components/SharedLegalContactSection";
import LegalSectionHeader from "@/app/components/LegalSectionHeader";

const tocItems: TocItem[] = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "use-of-website", label: "Use of the Website" },
  { id: "data-cookies", label: "Data Collection & Cookies" },
  { id: "user-conduct", label: "User Conduct" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "medical-disclaimer", label: "Medical Disclaimer" },
  { id: "limitation-liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "changes-terms", label: "Changes to Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact-information", label: "Contact Information" },
];

const TickMark = () => (
  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#11A9A2] bg-[#EAFBF9]">
    <Check className="h-2.5 w-2.5 text-[#0F9F98] stroke-[3]" />
  </span>
);

const MobileTableOfContents = ({ items }: { items: TocItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="mb-8 lg:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-border bg-white p-4 text-foreground"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Menu className="h-5 w-5" />
          Table of Contents
        </span>
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 rounded-lg border border-gray-border bg-white p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className="w-full rounded-md px-2 py-2 text-left text-sm text-gray-icon transition-colors hover:bg-muted hover:text-primary-blue"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TermsContent = () => {
  const sectionDividerStyle = {
    background:
      "linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, #E2E8F0 20%, #E2E8F0 80%, rgba(226, 232, 240, 0) 100%)",
  };

  return (
    <section className="bg-background py-12 md:py-14">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

          <div className="mt-4">
            <MobileTableOfContents items={tocItems} />

            <div id="acceptance" className="scroll-mt-24">
              <LegalSectionHeader index={1} eyebrow="Agreement" title="Acceptance of Terms" />
              <div className="space-y-4 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  By accessing or using the DecentCare website, you agree to these Terms of Service. Your
                  use of the site and any submitted inquiries or forms implies acceptance of these terms. If
                  you do not agree to all terms, please do not use the website.
                </p>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="use-of-website" className="scroll-mt-24">
              <LegalSectionHeader index={2} eyebrow="Acceptable Use" title="Use of the Website" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  This website is provided for information purposes about DecentCare&apos;s services and is
                  intended for healthcare professionals, clinics, hospitals, and authorized users. You agree to
                  use the site only for lawful purposes and in accordance with these terms.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>You must comply with all applicable laws and regulations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>
                      Unauthorized use or access (including attempts to probe, scan, or test vulnerabilities)
                      is strictly prohibited.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>
                      DecentCare may refuse or terminate your access at any time if use violates these terms
                      or any applicable law.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="data-cookies" className="scroll-mt-24">
              <LegalSectionHeader index={3} eyebrow="Tracking & Privacy" title="Data Collection and Cookies" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  DecentCare&apos;s website automatically uses cookies and similar technologies to improve
                  functionality and understand how visitors use the site. For example, we may observe page
                  visits, clicks, and basic browser details to improve user experience.
                </p>
                <p>
                  These cookies may include strictly necessary cookies and analytics cookies. You can control
                  or disable cookies through your browser settings, but doing so may affect site
                  functionality.
                </p>

                <div className="rounded-2xl border border-[#CFE1F1] bg-[#EAF4FF] p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-blue">
                    Data We Collect
                  </p>
                  <p className="m-0 text-sm text-primary-blue">
                    We collect only limited personal data when you choose to submit it (for example your name,
                    email, clinic name, and message in a contact request form). We use this information solely
                    to respond to your inquiry and improve our services.
                  </p>
                </div>

                <p>
                  Your data will be handled according to our Privacy Policy, in compliance with applicable
                  Indian data protection laws. As with similar services, any information you provide is
                  processed with reasonable security practices.
                </p>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="user-conduct" className="scroll-mt-24">
              <LegalSectionHeader index={4} eyebrow="Responsible Use" title="User Conduct" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  You agree to use the site responsibly. In particular, you must not use the site or any
                  submission forms for unlawful, unauthorized, or disruptive purposes.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>Submitting false, misleading, or abusive information through the demo request form.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>
                      Spreading any unauthorized advertising or spam through the site, or attempting to
                      impersonate another person or organization.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>
                      Interfering with the site&apos;s operation (for example by uploading malware, introducing
                      harmful scripts, or engaging in conduct that affects users or systems).
                    </span>
                  </li>
                </ul>

                <div className="rounded-2xl border border-[#F3D77A] bg-[#FFFDF7] p-5 text-[#7B6A2D]">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D9A609]" />
                    <p className="m-0 text-sm leading-relaxed">
                      DecentCare reserves the right to refuse or disable any submission that appears
                      inappropriate, offensive, or in violation of these terms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="intellectual-property" className="scroll-mt-24">
              <LegalSectionHeader index={5} eyebrow="Ownership" title="Intellectual Property" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  All content on this site, including text, graphics, logos, software, and design, is the
                  property of DecentCare or its licensors and is protected by applicable copyright, trademark,
                  and other intellectual property laws.
                </p>
                <div className="rounded-2xl border border-[#B6E5E0] bg-[#EAFBF9] p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-green">
                    Limited License
                  </p>
                  <p className="m-0 text-sm text-primary-blue">
                    You are granted a limited license to view and use this content for your personal or
                    professional information only.
                  </p>
                </div>
                <p>
                  Any other use, including copying, modifying, distributing, or creating derivative works from
                  the content, requires DecentCare&apos;s prior written consent.
                </p>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="medical-disclaimer" className="scroll-mt-24">
              <LegalSectionHeader index={6} eyebrow="Healthcare Information" title="Medical and Health Disclaimer" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  The information provided on this website is for general informational purposes only and is
                  not a substitute for professional medical advice or treatment. DecentCare does not provide
                  medical services through this site.
                </p>
                <div className="rounded-2xl border border-[#F3D77A] bg-[#FFFDF7] p-5 text-[#7B6A2D]">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D9A609]" />
                    <p className="m-0 text-sm leading-relaxed">
                      As a clinician terms emphasize: the contents of the website are for informational use and
                      do not constitute professional medical or healthcare advice, diagnosis, or recommendation.
                      You should not rely solely on information on this site for medical decisions and should
                      seek advice of a qualified healthcare provider.
                    </p>
                  </div>
                </div>
                <p>
                  DecentCare makes no representations or warranties about the accuracy, completeness, or
                  timeliness of any content. The site is provided &quot;as is&quot; and &quot;as available&quot; without
                  warranties.
                </p>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="limitation-liability" className="scroll-mt-24">
              <LegalSectionHeader index={7} eyebrow="Legal Protection" title="Limitation of Liability" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  To the fullest extent permitted by law, DecentCare and its officers, employees, affiliates,
                  and licensors will not be liable for any damages arising out of your use of this site. This
                  includes, without limitation, direct, indirect, incidental, special, consequential, or
                  punitive damages.
                </p>
                <div className="rounded-2xl border border-[#F4C7CC] bg-[#FFF5F6] p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C84A57]">
                    Important Notice
                  </p>
                  <p className="m-0 text-sm text-[#A83B47]">You use this website and rely on its content at your own risk.</p>
                </div>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="indemnification" className="scroll-mt-24">
              <LegalSectionHeader index={8} eyebrow="Risk Allocation" title="Indemnification" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  You agree to indemnify, defend, and hold DecentCare harmless from any third-party claims,
                  losses, liabilities, damages, and costs arising from your use of the website.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>Your violation of these terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>Your infringement of any intellectual property or rights of any person or entity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TickMark />
                    <span>Any misuse of this website by you or on your behalf</span>
                  </li>
                </ul>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="changes-terms" className="scroll-mt-24">
              <LegalSectionHeader index={9} eyebrow="Updates" title="Changes to Terms" />
              <div className="space-y-5 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  DecentCare may modify these Terms of Service at any time, at its sole discretion. For
                  example, changes may be made to reflect updates in our services or legal requirements.
                </p>
                <div className="rounded-2xl border border-[#CFE1F1] bg-[#EAF4FF] p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-blue">
                    Your Responsibility
                  </p>
                  <p className="m-0 text-sm text-primary-blue">
                    It is your responsibility to review these terms periodically. Continued use of this site
                    after any update is treated as acceptance of the revised terms.
                  </p>
                </div>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <div id="governing-law" className="scroll-mt-24">
              <LegalSectionHeader index={10} eyebrow="Jurisdiction" title="Governing Law and Jurisdiction" />
              <div className="space-y-4 font-['DM_Sans',sans-serif] text-[15px] leading-[1.85] text-primary-blue">
                <p>
                  These Terms are governed by the laws of India. Any dispute arising out of or related to
                  these Terms shall be subject to the exclusive jurisdiction of the courts in India,
                  consistent with applicable Indian law.
                </p>
              </div>
              <div className="my-11 h-px w-full md:my-14" style={sectionDividerStyle} />
            </div>

            <SharedLegalContactSection
              id="contact-information"
              className="scroll-mt-24 pb-4 mb-0 md:mb-0"
              sectionNumber={11}
              eyebrow="GET IN TOUCH"
              heading="Contact Information"
              description1="If you have any questions about these Terms of Service, please contact us at support@decentcare.com or by mail at:"
              description2="If you have any questions about these Terms of Service, please contact us at:"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
