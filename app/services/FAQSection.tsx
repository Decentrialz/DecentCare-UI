import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  subtitle?: string;
  backgroundColor?: string;
  variant?: "default" | "gradient-border";
}

const FAQSection = ({ 
  faqs, 
  subtitle = "Questions we hear from healthcare teams",
  backgroundColor = "#F9FAFB",
  variant = "default"
}: FAQSectionProps) => {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                color: "#0D9488",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#4B5563]">
              {subtitle}
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              if (variant === "gradient-border") {
                return (
                  <div 
                    key={index} 
                    className="rounded-2xl p-[0.8px]" 
                    style={{ 
                      background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.2), rgba(13, 92, 148, 0.2))',
                      boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="bg-white rounded-2xl px-6 border-none overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-[#0A0A0A] font-semibold text-sm hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#323232] text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                );
              }

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-[#E5E7EB] rounded-2xl px-6 overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderBottom: "1px solid #E5E7EB" }}
                >
                  <AccordionTrigger className="text-left text-[#0A0A0A] font-semibold text-sm hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#323232] text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
