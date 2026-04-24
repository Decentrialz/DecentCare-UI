import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import HeroTest from "@/app/assets/Hero.svg";

interface HeroBannerProps {
  heroImage: any;
  breadcrumbItems: { label: string; href?: string }[];
  title: string;
  description: string;
  subtitle?: string;
  highlightedText?: string;
  variant?: 'default' | 'centered';
}

const HeroBanner = ({ 
  heroImage, 
  breadcrumbItems, 
  title, 
  description, 
  subtitle,
  highlightedText,
  variant = 'default'
}: HeroBannerProps) => {
  console.log("HeroBanner received heroImage:", heroImage); // Debug log
  console.log("HeroBanner received breadcrumbItems:", breadcrumbItems); // Debug log
  console.log("Direct import HeroTest:", HeroTest); // Debug log
  
  const imageToUse = heroImage || HeroTest;
  
  // Different styles based on variant
  const isCentered = variant === 'centered';
  const contentPosition = isCentered ? 'justify-center pt-100' : 'justify-end';
  const descriptionColor = isCentered ? 'text-[#3D3F3F] font-extrabold' : 'text-[#3D3F3F]';
  const subtitleColor = isCentered ? 'text-[#3D3F3F], mt-[-10px]' : 'text-[#3D3F3F]';
  
  
  return (
    <section className="relative pt-12 lg:pt-18">
      {/* Hero Image with Content Overlay */}
      <div className="relative min-h-[600px] md:min-h-[650px] overflow-hidden">
        <Image 
          src={imageToUse} 
          alt="DecentCare" 
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/10" />
        
        {/* Breadcrumb */}
        <div className="absolute top-10 left-4 md:left-36 z-20">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Content Overlay */}
        <div className={`relative z-10 container mx-auto px-4 lg:px-8 max-w-5xl text-center flex flex-col ${contentPosition} items-center min-h-[600px] md:min-h-[650px] pb-8`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{title}</h1>
          <p className={`${descriptionColor} text-base ${isCentered ? 'mb-3' : 'mb-8'} max-w-5xl`}>
            {description}
          </p>
          {subtitle && (
            <p className={`${subtitleColor} text-sm max-w-3xl`}>
              {subtitle}
            </p>
          )}
          {highlightedText && (
            <div className="border border-[#3C83F6] bg-background/80 backdrop-blur-sm rounded-xl p-6 md:p-8 text-muted-foreground text-xs md:text-sm leading-relaxed">
              {highlightedText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
