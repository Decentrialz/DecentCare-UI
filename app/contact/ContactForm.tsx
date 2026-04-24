"use client";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

// Reusable form fields component
export const ContactFormFields = ({ heading, subheading }: { heading?: string; subheading?: string }) => (
  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
    {(heading || subheading) && (
      <div className="mb-4 text-center">
        {heading && <h2 className="text-lg font-bold text-[#168191] mb-1">{heading}</h2>}
        {subheading && <p className="text-xs text-[#737B8C]">{subheading}</p>}
      </div>
    )}
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label className="text-xs text-[#141516]">Full name<span className="text-red-500">*</span></Label>
        <Input placeholder="Enter your first name" required />
      </div>
      <div className="space-y-2">
        <Label className="text-xs text-[#141516]">Email<span className="text-red-500">*</span></Label>
        <Input type="email" placeholder="your@test.com" required />
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
          <Input type="tel" placeholder="000 000 0000" required className="pl-20" />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-xs text-[#141516]">Organisation<span className="text-red-500">*</span></Label>
        <Input placeholder="Your organisation" />
      </div>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label className="text-xs text-[#141516]">Your role</Label>
        <Input placeholder="Enter your role/designation" />
      </div>
      <div className="space-y-2">
        <Label className="text-xs text-[#141516]">Organisation Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="demo">Hospital</SelectItem>
            <SelectItem value="general">Clinic</SelectItem>
            <SelectItem value="support">Doctor</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="space-y-2">
      <Label className="text-xs" >Anything you'd like us to know?</Label>
      <Textarea placeholder="Tell us more..." rows={4} />
    </div>
    <div className="flex items-start gap-2">
      <Checkbox id="consent" className="mt-1" />
      <label htmlFor="consent" className="text-xs text-[#141516] leading-relaxed">
        I agree to receive SMS messages from DecentCare related to sales inquiries, demo scheduling, follow-ups, and product information. Message frequency may vary. Message and data rates may apply. Reply STOP to Cancel or HELP for assistance. I also agree to the <span className="text-[#0D9488] cursor-pointer">Terms of Service</span> and <span className="text-[#0D9488] cursor-pointer">Privacy Policy</span>.
      </label>
    </div>
    <Button className="w-full gap-2 bg-[#0D5C94]" size="lg" style={{ boxShadow: '0 4px 20px -2px rgba(13,92,148,0.08)' }}>
      <Send className="w-4 h-4" />
      Send Message
    </Button>
    <p className="text-xs text-[#989BA0] text-center">
      We typically respond within 1-2 business days.
    </p>
  </form>
);

const ContactForm = () => (
  <section className="py-6 md:py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12" style={{background: 'linear-gradient(135deg, #0D5C94, #076C63)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        Get in Touch
      </h2>
      <div className="grid lg:grid-cols-[11fr_9fr] gap-14 max-w-5xl mx-auto">
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
          <h3 className="text-base font-bold text-[#0F172B]">Reach us Directly</h3>
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
              <p className="font-bold text-[#0F172B] text-sm">Email</p>
              <p className="text-sm text-[#818584]">contact@decentcare.com</p>
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
              <p className="font-bold text-[#0F172B] text-sm">Phone</p>
              <p className="text-sm text-[#818584]">+91 XXXXX XXXXX</p>
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
