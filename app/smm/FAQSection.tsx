import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const faqs = [
  { q: "Do you handle everything end-to-end?", a: "Yes. Strategy, content production, publishing, community, and monthly optimisation." },
  { q: "Do doctors need to be on camera?", a: "Not mandatory. Voiceovers, explainers, and hybrid formats are supported." },
  { q: "Do you support all major platforms?", a: "Yes. Platform mix is aligned to your audience, specialty, and services." },
  { q: "How do you keep content healthcare-safe?", a: "Structured review workflows and responsible language standards are followed." },
  { q: "How soon can we start?", a: "Start with an audit, then move into monthly production and execution." },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-[#FFFFFF]">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <h2 className="text-md md:text-xl lg:text-2xl font-extrabold text-primary text-center mb-12" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-5">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="rounded-xl p-[0.8px]" 
            style={{ 
              background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.2), rgba(13, 92, 148, 0.2))',
              boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <AccordionItem 
              value={`faq-${i}`} 
              className="bg-white rounded-xl px-6 border-none"
            >
            <AccordionTrigger className="text-sm font-medium text-[#0A0A0A] hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
