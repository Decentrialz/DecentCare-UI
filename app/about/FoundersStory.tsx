import Image from "next/image";
import karthik from "@/app/assets/karthik.svg";
import swaroop from "@/app/assets/swaroop.svg";

const FoundersStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-8xl">
        {/* Section header with top and short side borders, heading not overlapped */}
       <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-8 border-t border-[#0D5C94]">
  
  {/* Left vertical border */}
  <div className="absolute left-0 top-0 h-20 border-l border-[#0D5C94] rounded-tl-xl" />

  {/* Right vertical border */}
  <div className="absolute right-0 top-0 h-20 border-r border-[#0D5C94] rounded-tr-xl" />

  {/* Heading */}
  <h2 className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-6 text-3xl md:text-4xl font-bold text-center">
    <span className="bg-gradient-to-r from-[#0D9488] to-[#0D5C94] bg-clip-text text-transparent">
      Founder’s Story
    </span>
  </h2>

  {/* Content */}
  <p className="mt-6 text-center text-base md:text-lg text-[#45556C] max-w-3xl mx-auto leading-relaxed">
    DecentCare was founded by Swaroop ESD and 
 Karthik K, bringing together complementary experience across healthcare technology, operations, and execution.
  </p>
</div>



        <div className="max-w-6xl mx-auto px-6">
          {/* Swaroop */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div>
              <Image
                src={swaroop}
                alt="Swaroop ESD"
                className="w-full h-72 object-cover object-top rounded-2xl shadow-md"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-2">Swaroop ESD</h3>
              <p className="text-xl text-[#363636] font-medium mb-3">
                Founder & CEO
              </p>
              <p className="text-[#45556C] leading-relaxed">
               Swaroop brings over 14 years of experience at the intersection of healthcare technology and strategic marketing. An IIT alumnus, he spent years working closely with hospitals and care teams, and kept encountering the same gap: providers had no unified system to manage patient journeys, coordinate care, and grow sustainably at the same time. That gap became the foundation of DecentCare.
              </p>
            </div>
          </div>

          {/* Karthik */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-24 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-black mb-2">
                Karthik Reddy K
              </h3>
              <p className="text-xl text-[#363636] font-medium mb-3">
                Founder & COO
              </p>
              <p className="text-[#45556C] leading-relaxed">
                Karthik brings over 14 years of experience in operations and large-scale platform execution. An IIT alumnus, he has spent his career building technology that delivers real-world impact at scale. As COO at AI Thinkers, he developed a deep understanding of what it takes to make complex systems perform consistently, and at DecentCare, he brings that same standard to healthcare.
              </p>
            </div>

            <div>
              <Image
                src={karthik}
                alt="Karthik Reddy K"
                className="w-full h-72 object-cover object-top rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Joint note */}
        <div className="text-center max-w-6xl mx-auto space-y-4">
          <p className="text-sm text-[#818584] leading-relaxed">
           Together, Swaroop and Karthik also co-founded DecenTrialz, a clinical trial recruitment and pre-screening platform. Their work across both care delivery and clinical research reinforced a shared conviction: healthcare systems function at their best when workflows are structured, communication is consistent, and care teams have technology they can depend on without reservation.
          </p>
          <p className="text-base font-semibold max-w-2xl mx-auto text-[#0D5C94]">
           DecentCare was built from this shared perspective , combining deep domain knowledge, operational execution, and a relentless focus on real-world adoption to deliver a platform that healthcare providers can grow with, and patients can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersStory;
