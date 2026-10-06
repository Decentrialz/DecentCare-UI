"use client";
import { useState, type FormEvent } from "react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const ORG_TYPES = [
  { value: "hospital", label: "Hospital" },
  { value: "clinic", label: "Clinic" },
  { value: "doctor", label: "Doctor" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.com$/i;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  orgType: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "organisation" | "orgType", string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  role: "",
  orgType: "",
  message: "",
  consent: false,
};

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="text-xs text-red-500" role="alert">
      {message}
    </p>
  ) : null;

const errorBorder = (msg?: string) => (msg ? "border-red-500 focus-visible:ring-red-500" : "");

// Reusable form fields component
export const ContactFormFields = ({ heading, subheading }: { heading?: string; subheading?: string }) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key as keyof Errors];
      return next;
    });
    if (status !== "idle") setStatus("idle");
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Full name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!EMAIL_REGEX.test(values.email.trim())) e.email = "Enter a valid email address ending in .com";
    if (!values.phone) e.phone = "Phone number is required";
    else if (values.phone.length !== 10) e.phone = "Phone number must be exactly 10 digits";
    if (!values.organisation.trim()) e.organisation = "Organisation is required";
    if (!values.orgType) e.orgType = "Please select an organisation type";
    return e;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }
    // TODO: send `values` to your API here (the original form didn't submit anywhere)
    setStatus("success");
    setValues(initialValues);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {(heading || subheading) && (
        <div className="mb-4 text-center">
          {heading && <h2 className="text-lg font-bold text-[#168191] mb-1">{heading}</h2>}
          {subheading && <p className="text-xs text-[#737B8C]">{subheading}</p>}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Full name<span className="text-red-500">*</span></Label>
          <Input
            placeholder="Enter your first name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={!!errors.name}
            className={errorBorder(errors.name)}
          />
          <FieldError message={errors.name} />
        </div>
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Email<span className="text-red-500">*</span></Label>
          <Input
            type="email"
            placeholder="your@test.com"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={errorBorder(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Phone<span className="text-red-500">*</span></Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="5.33" fill="#FF9933"/>
                <rect y="5.33" width="24" height="5.34" fill="#FFFFFF"/>
                <rect y="10.67" width="24" height="5.33" fill="#138808"/>
                <circle cx="12" cy="8" r="2" fill="none" stroke="#000080" strokeWidth="0.3"/>
                <circle cx="12" cy="8" r="2.5" fill="none" stroke="#000080" strokeWidth="0.2"/>
              </svg>
              <span className="text-sm text-[#141516]">+91</span>
            </div>
            <Input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="000 000 0000"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
              aria-invalid={!!errors.phone}
              className={`pl-20 ${errorBorder(errors.phone)}`}
            />
          </div>
          <FieldError message={errors.phone} />
        </div>
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Organisation<span className="text-red-500">*</span></Label>
          <Input
            placeholder="Your organisation"
            value={values.organisation}
            onChange={(e) => setField("organisation", e.target.value)}
            aria-invalid={!!errors.organisation}
            className={errorBorder(errors.organisation)}
          />
          <FieldError message={errors.organisation} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Your role</Label>
          <Input
            placeholder="Enter your role/designation"
            value={values.role}
            onChange={(e) => setField("role", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs text-[#141516]">Organisation Type<span className="text-red-500">*</span></Label>
          <Select value={values.orgType} onValueChange={(v) => setField("orgType", v)}>
            <SelectTrigger
            aria-invalid={!!errors.orgType}
              className={`${errorBorder(errors.orgType)} [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180`}
              >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4} className="z-[200] bg-white">
  {ORG_TYPES.map((o) => (
    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
  ))}
</SelectContent>
          </Select>
          <FieldError message={errors.orgType} />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">Anything you'd like us to know?</Label>
        <Textarea
          placeholder="Tell us more..."
          rows={4}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="consent"
          className="mt-1"
          checked={values.consent}
          onCheckedChange={(c) => setField("consent", c === true)}
        />
        <label htmlFor="consent" className="text-xs text-[#141516] leading-relaxed">
          I agree to receive SMS messages from DecentCare related to sales inquiries, demo scheduling, follow-ups, and product information. Message frequency may vary. Message and data rates may apply. Reply STOP to Cancel or HELP for assistance. I also agree to the <span className="text-[#0D9488] cursor-pointer">Terms of Service</span> and <span className="text-[#0D9488] cursor-pointer">Privacy Policy</span>.
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600" role="alert">
          Please fill in the required fields highlighted above.
        </div>
      )}
      {status === "success" && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-700" role="status">
          Thank you! Your details have been submitted. Our team will be in touch soon.
        </div>
      )}

      <Button type="submit" className="w-full gap-2 bg-[#0D5C94]" size="lg" style={{ boxShadow: '0 4px 20px -2px rgba(13,92,148,0.08)' }}>
        <Send className="w-4 h-4" />
        Send Message
      </Button>
      <p className="text-xs text-[#989BA0] text-center">
        We typically respond within 1-2 business days.
      </p>
    </form>
  );
};

const ContactForm = () => (
  <section className="py-6 md:py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12" style={{background: 'linear-gradient(135deg, #0D5C94, #076C63)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        Get in Touch
      </h2>
      <div className="grid lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] gap-8 lg:gap-14 max-w-5xl mx-auto">
        {/* Form */}
        <div
          className="bg-card rounded-2xl p-8 card-elevated"
          style={{
            border: '1px solid #EEF1F1',
            boxShadow: '0 4px 20px 0 rgba(13,92,148,0.1)'
          }}
        >
          <ContactFormFields />
        </div>
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-base font-bold text-[#0F172B]">Reach us Directly</h2>
          <div className="bg-card rounded-xl p-5 card-elevated flex items-start gap-4" style={{
                border: '1px solid #EEF1F1',
                boxShadow: '0 4px 20px 0 rgba(13,92,148,0.1)'
              }}>
            <div
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0"  style={{ backgroundColor: 'rgba(13,92,148,0.15)' }}
            >
              <Mail className="w-6 h-6 text-[#0D5C94]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172B] text-sm">Email</h3>
              <p className="text-sm text-[#818584]">support@decentcare.ai</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-5 card-elevated flex items-start gap-4" style={{
                border: '1px solid #EEF1F1',
                boxShadow: '0 4px 20px 0 rgba(13,92,148,0.1)'
              }}>
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0"  style={{ backgroundColor: 'rgba(13,92,148,0.15)' }}>
              <Phone className="w-6 h-6 text-[#0D5C94]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172B] text-sm">Phone</h3>
              <p className="text-sm text-[#818584]">08065916085 </p>
              <p className="text-xs text-[#818584] flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> Monday to Friday, 9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>
          <h3 className="text-base font-bold text-[#0F172B] pt-2">Office Address</h3>
          <div className="bg-card rounded-xl p-5 card-elevated flex flex-col gap-4" style={{ border: '1px solid #EEF1F1', boxShadow: '0 4px 20px 0 rgba(13,92,148,0.1)' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(13,92,148,0.15)' }}>
                <MapPin className="w-6 h-6 text-[#0D5C94]" />
              </div>
              <div>
                <p className="font-bold text-[#0F172B] text-sm mb-1">DecentCare Headquarters</p>
                <p className="text-sm text-[#818584]">
                  Plot No 1/C, Sy No 83/1<br />
                  Raidurgam, Knowledge City Rd<br />
                  Panmaktha, Hyderabad<br />
                  Serilingampalle (M), Telangana – 500032<br />
                  India
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-48 mt-2">
              <iframe
                title="DecentCare Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.281047489682!2d78.37677003870508!3d17.432790595865576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1773306571259!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm;
