import { Search, Facebook, Video, Slack, RotateCcw, MapPin, Clock } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Healthcare Search Ads",
    description: "Google Search Campaigns Built For High-Intent Patient Demand",
    bgColor: "#0D5C94",
  },
  {
    icon: Facebook,
    title: "Paid Social Campaigns",
    description: "Meta Ads That Build Trust and Drive Enquiries",
    bgColor: "#0D9488",
  },
  {
    icon: Video,
    title: "YouTube Campaigns",
    description: "Video Reach and Consideration Through Google's YouTube Inventory",
    bgColor: "#0D5C94",
  },
  {
    icon: Slack,
    title: "Video Ads Across Platforms",
    description: "Short-Form and Mid-Length Video For Patient Acquisition",
    bgColor: "#0D9488",
  },
  {
    icon: Clock,
    title: "Retargeting & Remarketing",
    description: "Follow-Up Ads Across Google and Meta To Improve Conversions",
    bgColor: "#0D5C94",
  },
  {
    icon: MapPin,
    title: "Multi-Location Campaigns",
    description: "Service-Line Clarity and Reporting Across Multiple Branches",
    bgColor: "#0D9488",
  },
];

const WhatOurServiceIncludesSection = () => {
  return (
    <section className="py-12 lg:py-18 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
              What Our Paid Marketing Service Includes
            </h2>
            <p className="text-base text-[#4B5563] max-w-3xl mx-auto">
              A complete, integrated paid media system across every channel patients use to research and choose healthcare providers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurServiceIncludesSection;
