"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/app/assets/heroBackground.png";
import heroMiddle from "@/app/assets/heroMiddle.png";
import highIntent1 from "@/app/assets/highIntent1.png";
import highIntent2 from "@/app/assets/highIntent2.png";
import highIntent3 from "@/app/assets/highIntent3.png";
import highIntent4 from "@/app/assets/highIntent4.png";
import Container from "./Container";
import DemoModal from "@/app/components/DemoModal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#edf5fa] pt-24 lg:pt-28">
      <Image src={heroBackground} alt="" fill priority sizes="100vw" className="absolute inset-0 -z-30 object-cover object-center" />
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(97deg, rgba(217, 227, 239, 0.72) 1.7%, rgba(229, 234, 241, 0.3) 85.63%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-20 z-0 select-none overflow-hidden lg:top-24" aria-hidden="true">
        <p className="text-center lg:text-[240px] font-extrabold leading-none text-white/75">Patients</p>
      </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-b from-transparent via-white/55 to-white" aria-hidden="true" />

      <Container className="relative min-h-[660px] py-12 md:min-h-[700px] md:py-16 lg:min-h-[620px] lg:py-10">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:pt-44">
          <div>
            <p className="inline-flex rounded-full bg-home-success/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-home-success uppercase">Behavioral intelligence<br />for Indian healthcare</p>
            <h1 className="mt-6 text-[48px] font-bold leading-[1.12] text-home-heading">Understand your patients.<span className="block text-home-success">Grow your <br/ > revenue.</span></h1>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setShowModal(true)} className="inline-flex h-11 items-center justify-center gap-3 cursor-pointer rounded-md bg-[#12649c] px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0f568a]">Request a demo <ArrowRight className="h-4 w-4" /></button>
              <button type="button" onClick={() => document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex h-11 items-center justify-center cursor-pointer rounded-md border border-[#0d9da4] bg-white/80 px-5 text-sm font-medium text-[#0d9da4] transition-colors hover:bg-white">See the Platform</button>
            </div>
          </div>
          <div className="self-end lg:pl-[48%] lg:pb-9">
            <p className="max-w-[360px] text-base font-semibold leading-[1.8] text-[#4b5563]">DecentCare shows what every patient is doing, identifies who is ready to move forward, and helps your team take timely action. It connects your hospital records with your front desk and call team, so no patient is overlooked or lost.</p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <div className="relative h-full w-full">
            <div className="absolute left-1/2 top-0 z-5 h-[700px] w-[40%] max-w-[460px] -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)]">
              <Image src={heroMiddle} alt="Doctor using a tablet" priority sizes="40vw" className="h-auto w-full object-contain object-top" />
            </div>

            <div className="absolute left-[27%] top-[18%] min-[1330px]:left-[29%] min-[1380px]:top-[19%] min-[1440px]:left-[30%] min-[1440px]:top-[19%] z-0 h-[145px] w-[210px] rounded-[23px] bg-white/90 px-5 py-4 shadow-[0_10px_24px_rgba(15,63,160,0.14)] backdrop-blur">
                <p className="text-xs font-semibold leading-tight text-home-heading">New Leads Today</p>
                <p className="mt-4 text-3xl font-extrabold leading-none tracking-tight text-[#062742]">128</p>
              <svg viewBox="0 0 210 52" className="absolute bottom-4 left-2 h-9 w-[200px] overflow-visible" aria-hidden="true">
                <polyline points="4,44 32,41 50,25 72,34 94,25 114,29 135,7 156,25 178,16 202,2" fill="none" stroke="#0d9da4" strokeWidth="2" />
                <circle cx="4" cy="44" r="3.5" fill="#0d9da4" /><circle cx="32" cy="41" r="3.5" fill="#0d9da4" /><circle cx="50" cy="25" r="3.5" fill="#0d9da4" /><circle cx="72" cy="34" r="3.5" fill="#0d9da4" /><circle cx="94" cy="25" r="3.5" fill="#0d9da4" /><circle cx="114" cy="29" r="3.5" fill="#0d9da4" /><circle cx="135" cy="7" r="3.5" fill="#0d9da4" /><circle cx="156" cy="25" r="3.5" fill="#0d9da4" /><circle cx="178" cy="16" r="3.5" fill="#0d9da4" /><circle cx="202" cy="2" r="3.5" fill="#0d9da4" />
              </svg>
            </div>
            <div className="absolute right-[32%] top-[37%] z-10 rounded-xl bg-white/80 pl-4 pr-12 py-3 shadow-[0_10px_24px_rgba(15,63,160,0.14)]"><p className="text-xs font-semibold text-home-heading">High Intent Patients</p><p className="mt-1 text-3xl font-extrabold leading-none text-[#102238]">248</p><div className="mt-3 flex items-center pl-1"><Image src={highIntent1} alt="" width={28} height={28} className="relative z-40 h-7 w-7 rounded-full border-2 border-white object-cover" /><Image src={highIntent2} alt="" width={28} height={28} className="relative z-30 -ml-2 h-7 w-7 rounded-full border-2 border-white object-cover" /><Image src={highIntent3} alt="" width={28} height={28} className="relative z-20 -ml-2 h-7 w-7 rounded-full border-2 border-white object-cover" /><Image src={highIntent4} alt="" width={28} height={28} className="relative z-10 -ml-2 h-7 w-7 rounded-full border-2 border-white object-cover" /><span className="relative z-0 -ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#f5f7fa] text-sm font-medium text-[#6b7280]">+12</span></div></div>
            <div className="absolute left-[30%] top-[70%] z-10 flex gap-4 px-4 py-3 items-center justify-between rounded-[20px] bg-white/50 px-5 shadow-[0_10px_24px_rgba(15,63,160,0.1)]">
              <div>
                <p className="text-xs font-semibold leading-tight text-home-heading">Conversion Rate</p>
                <p className="mt-3 text-3xl font-extrabold leading-none tracking-tight text-[#062742]">24.6%</p>
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[conic-gradient(#12649c_0deg_246deg,#0d9da4_246deg_360deg)]"><div className="h-[32px] w-[32px] rounded-full bg-[#f7f9fc]" /></div>
            </div>
            <div className="absolute left-[54%] top-[72%] z-10 flex px-4 py-3 flex-col items-start justify-between rounded-[20px] bg-white/80 px-5 py-4 shadow-[0_10px_24px_rgba(15,63,160,0.1)]">
              <div>
                <p className="text-xs font-semibold leading-tight text-[#12649c]">Appointments Booked</p>
                <p className="mt-3 text-3xl font-extrabold leading-none tracking-tight text-[#062742]">36%</p>
              </div>
              <div className="mt-2 flex h-8 w-full items-end justify-between px-3">
                <i className="h-4 w-1 rounded-full bg-[#0d9da4]" /><i className="h-5 w-1 rounded-full bg-[#0d9da4]" /><i className="h-3 w-1 rounded-full bg-[#0d9da4]" /><i className="h-7 w-1 rounded-full bg-[#0d9da4]" /><i className="h-5 w-1 rounded-full bg-[#0d9da4]" /><i className="h-6 w-1 rounded-full bg-[#0d9da4]" /><i className="h-5 w-1 rounded-full bg-[#0d9da4]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 mx-auto mt-8 h-[440px] w-[54%] max-w-[270px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)] lg:hidden">
          <Image src={heroMiddle} alt="Doctor using a tablet" priority sizes="54vw" className="h-auto w-full object-contain object-top" />
        </div>
      </Container>
      {showModal && <DemoModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default HeroSection;
