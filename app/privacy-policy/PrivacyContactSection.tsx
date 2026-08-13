import { Mail, MapPin, Phone } from "lucide-react";

const PrivacyContactSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background" id="contact-us">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Empty space for sidebar alignment */}
          <div className="hidden lg:block"></div>

          {/* Contact Content */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-secondary-green text-white rounded-lg text-base font-bold">
                  9
                </span>
                Contact Us
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>

            {/* Gradient Contact Card */}
            <div 
              className="rounded-2xl p-8 md:p-10"
              style={{ background: 'linear-gradient(135deg, #0D5C94 0%, #0D9488 100%)' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                DecentCare
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Email */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2">Email us</h4>
                  <a 
                    href="mailto:support@decentcare.ai" 
                    className="text-white/90 text-sm hover:text-white transition-colors break-all"
                  >
                    support@decentcare.ai
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2">Call us</h4>
                  <p className="text-white/90 text-sm">
                    Available Mon-Fri, 9am-6pm IST
                  </p>
                </div>

                {/* Address */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2">Visit us</h4>
                  <p className="text-white/90 text-sm">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">Data Protection Officer:</strong> For matters related to data protection and privacy, you may contact our Data Protection Officer at the email address above.
                </p>
              </div>
            </div>

            {/* Acknowledgment Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
              </p>
              <p className="text-muted-foreground text-sm text-center mt-4 font-medium">
                Last Updated: January 22, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContactSection;
