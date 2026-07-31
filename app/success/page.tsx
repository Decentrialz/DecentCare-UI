import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroSuccessSection from "./HeroSuccessSection";

export const metadata: Metadata = {
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/success'),
  },
};
// import VideoTestimonialsSection from "./VideoTestimonialsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import MeasurableImpactSection from "./MeasurableImpactSection";
import WhyTrustUsSection from "./WhyTrustUsSection";
import SuccessCTASection from "./SuccessCTASection";


// import videoThumb1 from "@/app/assets/videoThumb1.svg";
// import videoThumb2 from "@/app/assets/videoThumb2.svg";
// import videoThumb3 from "@/app/assets/videoThumb3.svg";
// import videoThumb4 from "@/app/assets/videoThumb4.svg";
import { Users, TrendingUp, Clock, Heart } from "lucide-react";

// const videoTestimonials = [
//   {
//     name: "Dr. Priya Sharma",
//     org: "Harmony Eye Care",
//     category: "Single-Doctor Clinic",
//     categoryColor: "bg-[#0D9488]",
//     duration: "3:24",
//     image: videoThumb1,
//     quote: '"Patient engagement improved by 80% in just 3 months"',
//   },
//   {
//     name: "Dr. Rajesh Kumar",
//     org: "LifeCare Hospital",
//     category: "Multi-Specialty Hospital",
//     categoryColor: "bg-[#0D9488]",
//     duration: "4:15",
//     image: videoThumb2,
//     quote: '"We eliminated missed follow-ups completely"',
//   },
//   {
//     name: "Dr. Anita Desai",
//     org: "MedFirst Surgical Center",
//     category: "Surgical Center",
//     categoryColor: "bg-[#0D9488]",
//     duration: "2:58",
//     image: videoThumb3,
//     quote: '"Post-op care coordination is now seamless"',
//   },
//   {
//     name: "Dr. Vikram Singh",
//     org: "CareConnect Clinics",
//     category: "Multi-Specialty Clinic",
//     categoryColor: "bg-[#0D9488]",
//     duration: "3:42",
//     image: videoThumb4,
//     quote: '"Our team productivity doubled with task management"',
//   },
// ];

const caseStudies = [
  {
    name: "Dr. Yuvrajsingh Gehlot",
    role: "Laparoscopic Surgeon, General Surgeon & Proctologist",
    org: "GutCare Clinics, Bangalore, Karnataka",
    type: "Clinic",
    quote: '"The post-op follow-up module changed how our clinical team works. Day-one discharge tasks are triggered automatically. We stopped missing calls we didn\'t know we needed to make."',
    challenge: "Despite clinical excellence, GutCare's specialised procedures were invisible in search. Patients found generalist hospitals first, driving low-quality inquiries and heavy referral dependency.",
    solution: "Built a procedure-intent SEO architecture with condition-specific landing pages, local search optimisation across Bangalore, and a content calendar targeting surgical queries at every decision stage.",
    outcome: "Organic sessions for procedure pages grew 340% in six months. Inbound inquiries became more qualified, reducing consultation time. Paid referral dependence dropped by over 40%.",
    stat: "340%",
    statLabel: "Growth in procedure-intent organic sessions",
  },
  {
    name: "Prof. Dr. Snigdha Gowd",
    role: "Chairperson & CEO",
    org: "Dr. Gowds Dental Hospital, Hyderabad, Telangana",
    type: "Dental Hospital",
    quote: '"Managing patient journeys across multiple dental specialties used to be chaotic. With Care Journey CRM, every appointment, follow-up, and care step is tracked automatically. Nothing falls through the cracks anymore."',
    challenge: "Advanced specialties including implants, orthodontics, and smile design had no targeted digital strategy. Paid campaigns were running without a coordinated content foundation to support them.",
    solution: "Designed specialty-mapped social content — procedure reels, patient education posts, and outcome stories — paired with high-intent paid campaigns and retargeting sequences per specialty.",
    outcome: "Inquiries for implants and cosmetic dentistry grew 4x in Q1. Cost-per-lead dropped 38% with higher lead quality. Social following crossed 45,000 within six months of launch.",
    stat: "4x",
    statLabel: "Increase in high-value procedure inquiries",
  },
  {
    name: "Dr. Rajashekar M R",
    role: "MBBS, MS, Founder & Chief Proctologist",
    org: "Chirag Global Hospital, Bangalore, Karnataka",
    type: "Hospital",
    quote: '"Running a surgical hospital means managing complex care journeys for every patient. Care Journey CRM brought everything into one place. Our teams now coordinate faster and patients never fall through the cracks."',
    challenge: "Managing post-surgical care across multiple teams was time-consuming and error-prone. Follow-ups were inconsistent, and coordination gaps were impacting patient recovery experience.",
    solution: "Deployed AI-Enabled Care Journey CRM to unify care coordination across surgical and recovery teams, with automated follow-up triggers and real-time patient status visibility.",
    outcome: "Care coordination turnaround improved 3x. Post-surgical follow-ups became consistent and timely, significantly reducing gaps between discharge and recovery check-ins.",
    stat: "3×",
    statLabel: "Improvement in care coordination turnaround",
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Healthcare Providers", sub: "Clinics & hospitals trust DecentCare" },
  { icon: TrendingUp, value: "65%", label: "Avg. Drop-off Reduction", sub: "In patient care journey completion" },
  { icon: Clock, value: "2hrs+", label: "Daily Time Saved", sub: "Per healthcare team member" },
  { icon: Heart, value: "95%", label: "Client Satisfaction", sub: "Would recommend DecentCare" },
];


const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSuccessSection />
      {/* <VideoTestimonialsSection videoTestimonials={videoTestimonials} /> */}
      <CaseStudiesSection caseStudies={caseStudies} />
      <MeasurableImpactSection stats={stats} />
      <WhyTrustUsSection />
      <SuccessCTASection />      <MobileStickyButtons />      <Footer />
    </div>
  );
};

export default SuccessStories;
