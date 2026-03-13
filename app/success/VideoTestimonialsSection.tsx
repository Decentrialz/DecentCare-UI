import Image from "next/image";
import { Button } from "../components/ui/button";
import { Play, Clock, ArrowRight } from "lucide-react";

interface VideoTestimonial {
  image: string;
  name: string;
  org: string;
  category: string;
  categoryColor: string;
  duration: string;
  quote: string;
}

interface Props {
  videoTestimonials: VideoTestimonial[];
}

const VideoTestimonialsSection = ({ videoTestimonials }: Props) => (
  <section className="py-20 bg-[#F9FAFB]" id="video-testimonials">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6" style={{ background: 'rgba(13, 148, 136, 0.10)' }}>
          <span className="text-sm font-medium text-[#0D9488]">Video Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D5C94] mb-4">
          Hear It From Our Healthcare Partners
        </h2>
        <p className="text-[#737B8C]">
          Watch how doctors and healthcare teams are transforming their digital growth and patient care with DecentCare.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videoTestimonials.map((item, i) => (
          <div key={i} className="bg-background rounded-2xl overflow-hidden card-elevated" style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)' }}>
            <div className="relative">
              <Image src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className={`absolute top-4 left-4 ${item.categoryColor} text-accent-foreground text-xs font-medium px-3 py-1 rounded-full`}>
                {item.category}
              </div>
              <div className="absolute top-4 right-4 bg-[#000000]/60 backdrop-blur text-[#FFFFFF] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.duration}
              </div>
              <button className="absolute inset-0 flex items-center justify-center" aria-label="Play video">
                <div className="w-14 h-14 bg-[#FFFFFF] rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Play className="w-4 h-4 text-[#0D9488] fill-current" />
                </div>
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-bold text-[#1F2020]">{item.name}</h4>
                  <p className="text-sm text-[#737B8C]">{item.org}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="md" 
                  className="gap-1 text-xs bg-[#0D5C94] text-[#FFFFFF]"
                  style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)' }}
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-sm text-[#1F2020] italic">{item.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
