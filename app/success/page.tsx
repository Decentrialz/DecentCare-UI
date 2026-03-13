
import Navbar from "@/app/components/navbar";
import Breadcrumb from "@/app/components/Breadcrumb";
import Footer from "@/app/components/Footer";
import HeroSuccessSection from "./HeroSuccessSection";
import VideoTestimonialsSection from "./VideoTestimonialsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import MeasurableImpactSection from "./MeasurableImpactSection";
import WhyTrustUsSection from "./WhyTrustUsSection";
import SuccessCTASection from "./SuccessCTASection";


import videoThumb1 from "@/app/assets/videoThumb1.svg";
import videoThumb2 from "@/app/assets/videoThumb2.svg";
import videoThumb3 from "@/app/assets/videoThumb3.svg";
import videoThumb4 from "@/app/assets/videoThumb4.svg";
import { Users, TrendingUp, Clock, Heart } from "lucide-react";

const videoTestimonials = [
  {
    name: "Dr. Priya Sharma",
    org: "Harmony Eye Care",
    category: "Single-Doctor Clinic",
    categoryColor: "bg-[#0D9488]",
    duration: "3:24",
    image: videoThumb1,
    quote: '"Patient engagement improved by 80% in just 3 months"',
  },
  {
    name: "Dr. Rajesh Kumar",
    org: "LifeCare Hospital",
    category: "Multi-Specialty Hospital",
    categoryColor: "bg-[#0D9488]",
    duration: "4:15",
    image: videoThumb2,
    quote: '"We eliminated missed follow-ups completely"',
  },
  {
    name: "Dr. Anita Desai",
    org: "MedFirst Surgical Center",
    category: "Surgical Center",
    categoryColor: "bg-[#0D9488]",
    duration: "2:58",
    image: videoThumb3,
    quote: '"Post-op care coordination is now seamless"',
  },
  {
    name: "Dr. Vikram Singh",
    org: "CareConnect Clinics",
    category: "Multi-Specialty Clinic",
    categoryColor: "bg-[#0D9488]",
    duration: "3:42",
    image: videoThumb4,
    quote: '"Our team productivity doubled with task management"',
  },
];

const caseStudies = [
  {
    name: "Dr. Meera Patel",
    role: "Chief Medical Officer",
    org: "Sunrise Multi-Specialty Hospital",
    type: "200+ Bed Hospital",
    quote: '"DecentCare transformed how we manage patient care. It\'s not just software—it\'s a new way of working."',
    challenge: "Fragmented patient data across departments led to missed follow-ups and poor care coordination. Staff relied on manual registers and WhatsApp, causing delays and confusion.",
    solution: "Implemented DecentCare's care journey tracking across all departments with unified communication channels and automated task assignments for the care team.",
    outcome: "Complete visibility into patient journeys from admission to discharge. Care coordinators now proactively manage follow-ups, reducing patient drop-offs significantly.",
    stat: "65%",
    statLabel: "Reduction in missed follow-ups",
  },
  {
    name: "Dr. Arjun Reddy",
    role: "Founder & Lead Surgeon",
    org: "Excel Orthopedic Center",
    type: "Surgical Center",
    quote: '"DecentCare transformed how we manage patient care. It\'s not just software—it\'s a new way of working."',
    challenge: "Complex pre-op and post-op workflows were managed manually. Surgery scheduling conflicts and inconsistent patient preparation were affecting outcomes.",
    solution: "Deployed structured care stages for surgical workflows with task-driven coordination for pre-op assessments and post-op tracking.",
    outcome: "Streamlined surgical journey with clear accountability. Post-operative follow-up completion rate increased dramatically, improving patient satisfaction.",
    stat: "40%",
    statLabel: "Faster surgery scheduling",
  },
  {
    name: "Dr. Kavitha Iyer",
    role: "Practice Owner",
    org: "Iyer Dental & Wellness",
    type: "Single-Doctor Clinic",
    quote: '"DecentCare transformed how we manage patient care. It\'s not just software—it\'s a new way of working."',
    challenge: "As a solo practitioner, managing appointments, patient communications, and follow-ups consumed valuable clinical time. Many patients were lost due to inconsistent reminders.",
    solution: "Adopted DecentCare's streamlined patient management with automated appointment reminders and a clear daily workflow dashboard.",
    outcome: "Reclaimed 2+ hours daily previously spent on administrative tasks. Patient retention improved and the practice saw steady growth in new consultations.",
    stat: "3×",
    statLabel: "Increase in patient retention",
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
      <VideoTestimonialsSection videoTestimonials={videoTestimonials} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <MeasurableImpactSection stats={stats} />
      <WhyTrustUsSection />
      <SuccessCTASection />
      <Footer />
    </div>
  );
};

export default SuccessStories;
