'use client';
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Sparkles } from "lucide-react";
import { ContactFormFields } from "@/app/contact/ContactForm";
import { useState, useEffect } from "react";
import HeroH1 from "@/app/assets/HeroH1.svg";
import HeroH2 from "@/app/assets/HeroH2.svg";
import HeroH3 from "@/app/assets/HeroH3.svg";
import HeroH4 from "@/app/assets/HeroH4.svg";
import Image from "next/image";
import Link from "next/link";
import herosuccess from "@/app/assets/HeroSuccess.svg";
import Breadcrumb from "../components/Breadcrumb";



const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    // Prevent background scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);
    const heroImages = [HeroH1, HeroH2, HeroH3, HeroH4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    // Scroll to VideoTestimonialsSection
    const handleScrollToVideoTestimonials = () => {
        const section = document.getElementById('video-testimonials');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section
            className="relative pt-36 lg:pt-48 overflow-hidden w-full"
            style={{
                background: 'linear-gradient(180deg, #EFF6FF 0%, #EFF6FF 20%, #FFFFFF 100%)'
            }}
        >
            {/* Breadcrumb absolutely positioned above badge */}
            <nav
                className="flex items-center gap-2 px-4 py-2 rounded-full w-fit text-[#0D9488] text-sm font-medium shadow absolute left-[30%] top-[80px] md:left-[15%] md:top-[100px] -translate-x-1/2 z-30"
                style={{
                    background: 'rgba(13, 148, 136, 0.04)'
                }}
            >
                <Link href="/" className="hover:underline text-[#0D9488]">Home</Link>
                <span className="text-[#A7A7A7]">›</span>
                <span className="text-[#0D5C94] font-semibold">Success Stories</span>
            </nav>


            <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20 py-4">
                <div className="w-full mx-auto lg:max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-2 lg:pb-40">
                        {/* Left Content */}
                        <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                            {/* Badge */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full mx-auto lg:mx-0 w-fit mt-0 mb-10" style={{ background: 'rgba(13, 148, 136, 0.10)' }}>
                                <span className="text-xs lg:text-sm font-medium text-[#0D9488]">Success Stories</span>
                            </div>

                            {/* Mobile Image - Only visible on mobile */}
                            <div className="md:hidden w-full px-4 pb-6">
                                <div className="relative max-w-xl mx-auto">
                                    <Image
                                        src={herosuccess}
                                        alt="Healthcare professional"
                                        width={550}
                                        height={350}
                                        className="rounded-2xl w-full object-cover"
                                        style={{ maxHeight: '400px' }}
                                        priority
                                    />
                                    <div className="absolute bottom-[-16] left-[-16] bg-background rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(13, 148, 136, 0.14)' }}>
                                            <span className="text-[#1F938A] font-bold text-sm">50+</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Healthcare Providers</p>
                                            <p className="text-xs text-muted-foreground">Trust DecentCare</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Headline */}
                            <div className="space-y-4 text-center lg:text-left">
                                <h1 className="text-2xl md:text-3xl lg:text-[42px] font-bold leading-tight" style={{
                                    background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    paddingBottom: "0.15em",
                                    lineHeight: 1.15,
                                }}>
                                    Success Stories from Modern Healthcare Teams
                                </h1>
                                <p className="text-md text-[#818584] max-w-xl">
                                    Discover how clinics and hospitals transformed their patient care journey with DecentCare's integrated healthcare management system.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-16">
                                <Button
                                    className="h-[45px] px-6 py-[10px] flex items-center gap-[10px] shadow-[0_4px_20px_-2px_rgba(60,131,246,0.08)] hover:bg-[#0B4F7F] transition-all"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowModal(true)}
                                >
                                    Let's Connect
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                {/* Modal for ContactFormFields */}
                                {showModal && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                                        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
                                            <button
                                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                                                onClick={() => setShowModal(false)}
                                                aria-label="Close"
                                            >
                                                ×
                                            </button>
                                            <ContactFormFields
                                                heading="Book a Free Demo"
                                                subheading="Submit your details and a member of the DecentCare team will be in touch."
                                            />
                                        </div>
                                    </div>
                                )}
                                <Button
                                    variant="outline"
                                    className="h-[45px] px-16 lg:px-6 py-[10px] rounded-lg bg-white border border-[rgba(60,131,246,0.10)] flex items-center gap-[10px] shadow-[0_4px_20px_-2px_rgba(60,131,246,0.08)] hover:bg-[#F5FAFF] transition-all"
                                    onClick={handleScrollToVideoTestimonials}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Success Stories
                                </Button>

                            </div>

                        </div>

                        {/* Desktop Image - Only visible on desktop */}
                        <div className="relative hidden md:block">
                            <Image
                                src={herosuccess}
                                alt="Healthcare professional"
                                width={550}
                                height={350}
                                className="rounded-2xl w-full object-cover"
                                style={{ maxHeight: '400px' }}
                                priority
                            />
                            <div className="absolute bottom-[-16] left-[-24] bg-background rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(13, 148, 136, 0.14)' }}>
                                    <span className="text-[#1F938A] font-bold text-sm">50+</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Healthcare Providers</p>
                                    <p className="text-xs text-muted-foreground">Trust DecentCare</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
