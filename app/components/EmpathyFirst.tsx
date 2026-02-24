'use client';
import { Heart, Brain, Plus } from "lucide-react";
import { motion } from "framer-motion";
import heart from "@/app/assets/heart.svg";
import brain from "@/app/assets/brain.svg";

const EmpathyFirst = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#FFFFFF] relative">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ background: 'linear-gradient(135deg, #3C83F6, #2A9D90)' }}
      />
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4 relative">
        <div className="w-full mx-auto lg:max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1F2020]">Empathy first.</h2>
              <h3 className="text-2xl md:text-4xl font-bold text-accent leading-tight" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Intelligence always.</h3>
            </div>

            {/* Visual */}
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <motion.img 
                    src={heart.src} 
                    alt="Heart" 
                    className="w-24 h-24"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px border-t-2 border-dashed border-muted-foreground" />
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2A9D90, #3C83F6)', opacity: 0.2 }}>
                    <Plus className="w-5 h-5 text-white" style={{ opacity: 5 }} />
                  </div>
                  <div className="w-8 h-px border-t-2 border-dashed border-muted-foreground" />
                </div>
                  
                <div className="w-12 h-12 flex items-center justify-center">
                  <motion.img 
                    src={brain.src} 
                    alt="Brain" 
                    className="w-24 h-24"
                    animate={{
                      scale: [1, 0.85, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Every patient interaction is emotional. Every healthcare decision is critical.
              </p>
              <p className="text-sm text-muted-foreground">
                We believe technology should not replace care. It should support it, anticipate it, and extend it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
                }}
              >
                <div className="text-2xl font-bold text-[#0D9488]">98%</div>
                <div className="text-sm text-muted-foreground">Patient satisfaction rate</div>
              </div>
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
                }}
              >
                <div className="text-2xl font-bold text-[#0D5C94]">3x</div>
                <div className="text-sm text-muted-foreground">Better engagement</div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="flex items-center justify-end pr-8">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <motion.img 
                    src={heart.src} 
                    alt="Heart" 
                    className="w-48 h-48"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px border-t-2 border-dashed border-muted-foreground" />
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2A9D90, #3C83F6)', opacity: 0.2 }}>
                    <Plus className="w-7 h-7 text-white" style={{ opacity: 5 }} />
                  </div>
                  <div className="w-12 h-px border-t-2 border-dashed border-muted-foreground" />
                </div>
                  
                <div className="w-32 h-32 flex items-center justify-center">
                  <motion.img 
                    src={brain.src} 
                    alt="Brain" 
                    className="w-48 h-48"
                    animate={{
                      scale: [1, 0.85, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-[#1F2020] mb-2">Empathy first.</h2>
                <h3 className="text-4xl font-bold text-accent leading-tight" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Intelligence always.</h3>
              </div>

              <div className="space-y-4">
                <p className="text-base text-muted-foreground">
                  Every patient interaction is emotional. Every healthcare decision is critical.
                </p>
                <p className="text-base text-muted-foreground">
                  We believe technology should not replace care. It should support it, anticipate it, and extend it.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div 
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
                  }}
                >
                  <div className="text-2xl font-bold text-[#0D9488]">98%</div>
                  <div className="text-sm text-muted-foreground">Patient satisfaction rate</div>
                </div>
                <div 
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
                  }}
                >
                  <div className="text-2xl font-bold text-[#0D5C94]">3x</div>
                  <div className="text-sm text-muted-foreground">Better engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EmpathyFirst;
