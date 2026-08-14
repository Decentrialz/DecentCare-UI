"use client";

import TableOfContents, { type TocItem } from "./TableOfContents";
import { Check, Menu, Info, SquarePen, Trash, MessageSquare, Coffee } from "lucide-react";
import { useState } from "react";
import SharedLegalContactSection from "@/app/components/SharedLegalContactSection";
import LegalSectionHeader from "@/app/components/LegalSectionHeader";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-we-collect", label: "What We Collect" },
  { id: "how-we-use-data", label: "How We Use Data" },
  { id: "how-we-share-data", label: "How We Share Data" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "storage-security", label: "Storage & Security" },
  { id: "cookies", label: "Cookies" },
  { id: "your-rights", label: "Your Rights" },
  { id: "other-information", label: "Other Information" },
  { id: "contact-us", label: "Contact Us" },
];

const TickMarkIcon = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#11A9A2] bg-[#EAFBF9] ${className}`}>
    <Check className="h-2.5 w-2.5 text-[#0F9F98] stroke-[3]" />
  </span>
);

const MobileTableOfContents = ({ items }: { items: TocItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white border border-gray-border rounded-lg p-4 text-foreground font-semibold"
      >
        <span className="flex items-center gap-2">
          <Menu className="w-5 h-5" />
          Table of Contents
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 bg-white border border-gray-border rounded-lg p-4">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="w-full text-left text-sm text-gray-icon hover:text-primary-blue py-2"
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

const PrivacyContent = () => {
  const sectionDividerStyle = {
    background: "linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, #E2E8F0 20%, #E2E8F0 80%, rgba(226, 232, 240, 0) 100%)",
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

          <div className="mt-4">
            <MobileTableOfContents items={tocItems} />

            <div id="introduction" className="scroll-mt-24">
              <div
                className="rounded-2xl p-6 md:p-8 space-y-4 leading-[29.6px] border-t font-['DM_Sans',sans-serif]"
                style={{
                  background: "linear-gradient(109.17deg, #F1F5F9 0%, #E6F7F6 100%)",
                  borderTopColor: "#0D5C941A",
                }}
              >
                <p>
                  <strong className="text-primary-blue font-semibold">DecentCare</strong> (&quot;DecentCare&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect and process personal data when you visit <a href="https://www.decentcare.ai" className="text-primary-blue hover:underline font-medium">www.decentcare.ai</a> (the &quot;Website&quot;) or interact with us through Website forms or other Website channels.
                </p>
                <p>
                  For the purposes of this Privacy Policy, <strong className="text-primary-blue font-semibold">&quot;personal data&quot;</strong> means any information that relates to an identified or identifiable individual.
                </p>
                <p>
                  We update this Privacy Policy from time to time. We will post any changes on this page and update the &quot;Last Modified&quot; date above.
                </p>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="what-we-collect" className="scroll-mt-24">
              <LegalSectionHeader index={1} eyebrow="DATA COLLECTION" title="What Information We Collect And Process" />

              <div className="space-y-6 pl-4 text-base text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 1.1 Information you provide to DecentCare</h3>
                  <p className="leading-relaxed mb-3">When you interact with us via the Website (for example by submitting a demo request, contacting us, or requesting support), we may collect personal data such as:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Name</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Work email address</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Phone number</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Organisation name (clinic/hospital/practice)</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>City / location (if you provide it)</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Any information you include in a message or form submission</span></li>
                  </ul>
                  <p className="leading-relaxed mt-4">You can browse parts of the Website without submitting personal data, though some data may still be collected automatically (see below).</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 1.2 Information we collect automatically when you use the Website</h3>
                  <p className="leading-relaxed mb-3">Like most websites, we may automatically collect:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>IP address and approximate location inferred from IP</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Device and browser information</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Pages viewed, time spent, clicks, referring page/URL</span></li>
                    <li className="flex items-start gap-2"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Log data and basic diagnostics (to keep the Website working and secure)</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 1.3 Sensitive personal data</h3>
                  <div className="bg-[#FFFDF7] border border-[#F3D77A] rounded-2xl p-5 md:p-6 flex gap-3">
                    <svg className="w-5 h-5 text-[#E2AF07] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[15px] text-[#7B6A2D] leading-relaxed m-0">The Website is not intended for collecting sensitive personal data (including health/medical data). Please do not submit patient medical details or highly sensitive information through Website forms.</p>
                  </div>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="how-we-use-data" className="scroll-mt-24">
              <LegalSectionHeader index={2} eyebrow="DATA USAGE" title="How We Use Personal Data" />

              <div className="space-y-6 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <p>We use personal data for purposes such as:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Responding to requests (demo requests, enquiries, support messages)</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Communicating with you about your request, scheduling a call, or sharing requested information</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Website operations and improvement, including analytics and performance monitoring</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Security and fraud prevention, including detecting misuse and protecting the Website</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Legal compliance and enforcing our rights (for example, responding to lawful requests)</span></li>
                </ul>
                <div className="rounded-2xl border border-[#A9E1DD] bg-[#E8F9F7] p-6 md:p-7">
                  <p className="text-[11px] font-semibold text-secondary-green tracking-[0.14em] uppercase mb-3">LEGAL BASIS</p>
                  <p className="text-foreground leading-relaxed m-0">Where required, we rely on consent or other lawful grounds available under applicable Indian law for processing personal data.</p>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="how-we-share-data" className="scroll-mt-24">
              <LegalSectionHeader index={3} eyebrow="DATA SHARING" title="How We Share Personal Data" />

              <div className="space-y-6 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <div className="rounded-2xl border border-[#CFE1F1] bg-[#EAF4FF] p-6 md:p-7">
                  <p className="text-[11px] font-semibold text-primary-blue tracking-[0.14em] uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">OUR COMMITMENT</p>
                  <p className="m-0 text-primary-blue">We do not sell your personal data.</p>
                </div>
                <p>We may share personal data with:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span><strong className="text-foreground font-semibold">Service providers</strong> who help us run the Website and handle business operations (for example hosting, email delivery, analytics, CRM, scheduling tools). They process data only on our instructions and are subject to appropriate safeguards.</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span><strong className="text-foreground font-semibold">Professional advisers</strong> (legal, accounting, audit) where necessary.</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span><strong className="text-foreground font-semibold">Authorities</strong> when required by law, legal process, or to protect rights, safety, and security.</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span><strong className="text-foreground font-semibold">Business transfers</strong> if we are involved in a merger, acquisition, restructuring, or asset sale (data may be transferred as part of that transaction).</span></li>
                </ul>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="international-transfers" className="scroll-mt-24">
              <LegalSectionHeader index={4} eyebrow="INTERNATIONAL" title="How We Transfer Personal Data Internationally" />
              <div className="space-y-4 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <p>Some of our service providers may process or store data outside India (for example, cloud hosting or email infrastructure). When personal data is transferred internationally, we take reasonable steps to ensure appropriate protection consistent with applicable law.</p>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="storage-security" className="scroll-mt-24">
              <LegalSectionHeader index={5} eyebrow="SECURITY & RETENTION" title="How We Store And Secure Personal Data" />

              <div className="space-y-7 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif] ml-4">
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 5.1 Security</h3>
                  <p>We use reasonable administrative, technical, and organisational safeguards designed to protect personal data against unauthorised access, alteration, disclosure, or destruction.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 5.2 Retention</h3>
                  <p>We keep personal data only as long as necessary for the purposes described in this Privacy Policy, unless a longer period is required or permitted by law (for example, to comply with legal obligations or resolve disputes).</p>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="cookies" className="scroll-mt-24">
              <LegalSectionHeader index={6} eyebrow="TRACKING TECHNOLOGIES" title="Cookies And Similar Technologies" />

              <div className="space-y-6 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <p>We may use cookies and similar technologies (such as pixels or scripts) to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Enable core Website functionality</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Understand Website usage and improve performance</span></li>
                  <li className="flex items-start gap-3"><TickMarkIcon className="mt-0.5 flex-shrink-0" /><span>Remember preferences (where enabled)</span></li>
                </ul>
                <div className="rounded-2xl border border-[#CFE1F1] bg-[#EAF4FF] p-6 md:p-7">
                  <p className="text-[11px] font-semibold text-primary-blue tracking-[0.14em] uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">COOKIE CONTROL</p>
                  <p className="m-0 text-primary-blue">You can usually control cookies through browser settings, and (where available) our cookie controls. Blocking certain cookies may affect the Website experience.</p>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="your-rights" className="scroll-mt-24">
              <LegalSectionHeader index={7} eyebrow="YOUR RIGHTS" title="Your Privacy Rights And Choices" />
              <div className="space-y-6 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <p>Depending on applicable law (including India&apos;s Digital Personal Data Protection Act, 2023), you may have rights such as:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4FF] text-primary-blue border border-primary-blue/10">
                      <Info className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Access</h4>
                    <p className="text-sm text-primary-blue m-0">Access to information about your personal data</p>
                  </div>
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4FF] text-primary-blue border border-primary-blue/10">
                      <SquarePen className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Correction</h4>
                    <p className="text-sm text-primary-blue m-0">Correction of inaccurate or incomplete personal data</p>
                  </div>
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4FF] text-primary-blue border border-primary-blue/10">
                      <Trash className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Erasure</h4>
                    <p className="text-sm text-primary-blue m-0">Erasure of personal data (subject to lawful retention needs)</p>
                  </div>
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg  bg-[#EAF4FF] text-primary-blue border border-primary-blue/10">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Withdraw Consent</h4>
                    <p className="text-sm text-primary-blue m-0">Withdraw consent where processing is based on consent</p>
                  </div>
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 md:col-span-2">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4FF] text-primary-blue border border-primary-blue/10">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Grievance Redressal</h4>
                    <p className="text-sm text-primary-blue m-0">Grievance redressal through an accessible mechanism</p>
                  </div>
                </div>

                <div className="border-l-2 border-[#D6E5F5] pl-4 mt-8">
                  <p className="font-semibold text-primary-blue mb-2">• How to exercise your rights</p>
                  <p className="text-primary-blue text-sm leading-relaxed m-0">Email us at <a href="mailto:support@decentcare.ai" className="text-primary-blue hover:underline font-semibold">support@decentcare.ai</a> with your request. We may need to verify your identity before fulfilling requests.</p>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <div id="other-information" className="scroll-mt-24">
              <LegalSectionHeader index={8} eyebrow="ADDITIONAL INFORMATION" title="Other Important Privacy Information" />

              <div className="space-y-7 ml-4 text-primary-blue leading-relaxed font-['DM_Sans',sans-serif]">
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 8.1 Marketing preferences</h3>
                  <p>If we send you emails related to your enquiry or requested information, you can opt out of non-essential communications by using the unsubscribe link (if included) or by emailing <a href="mailto:support@decentcare.ai" className="text-primary-blue hover:underline font-semibold">support@decentcare.ai</a>.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 8.2 Children&apos;s privacy</h3>
                  <p>The Website is intended for professionals (doctors, clinics, hospitals) and not for children. We do not knowingly collect personal data from children.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-blue mb-3 font-['Plus_Jakarta_Sans',sans-serif]">• 8.3 Third-party websites</h3>
                  <p>The Website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
                </div>
              </div>
              <div className="my-12 md:my-16 h-px w-full" style={sectionDividerStyle} />
            </div>

            <SharedLegalContactSection
              sectionNumber={9}
              eyebrow="GET IN TOUCH"
              heading="Contact Us"
              description1="If you have questions or requests about this Privacy Policy or our data practices, contact:"
              description2="We're here to help with any privacy questions or data requests you may have. Reach out anytime."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;

