
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Award, Zap, ChevronDown, Code, Trophy, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Code, value: '18+', label: 'Years Experience', labelShort: 'Experience', gradient: 'from-purple-500 to-purple-600' },
    { icon: Trophy, value: 'Award', label: 'Winning Projects', labelShort: 'Winning', gradient: 'from-purple-600 to-indigo-600' },
    { icon: Sparkles, value: 'Full', label: 'Stack Expertise', labelShort: 'Expertise', gradient: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-[#fdfdfd]">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-purple-200/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[150px]"></div>
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Interactive Stats Badge */}
          <div className={`flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 px-3 sm:px-6 md:px-8 py-3 sm:py-4 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-purple-100/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} hover:shadow-2xl hover:border-purple-200 hover:-translate-y-1 w-full max-w-4xl mx-auto overflow-x-auto`}>
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group/item flex-shrink-0">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-[10px] sm:text-xs md:text-sm font-black text-slate-900 group-hover/item:text-purple-600 transition-colors duration-300 whitespace-nowrap">{stat.value}</div>
                    <div className="text-[7px] sm:text-[8px] md:text-[9px] uppercase font-bold text-slate-500 tracking-wider whitespace-nowrap">
                      <span className="sm:hidden">{stat.labelShort}</span>
                      <span className="hidden sm:inline">{stat.label}</span>
                    </div>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="w-px h-6 sm:h-7 md:h-8 bg-slate-200 mx-1 sm:mx-2 flex-shrink-0"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Hero Title */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
              Abdullah <br />
              <span className="text-purple-500 italic font-light">Mohammed</span> <br />
              <span className="text-slate-900 relative">
                Alasmari
                <span className="absolute -bottom-2 left-1/4 w-1/2 h-4 bg-purple-500/10 -rotate-1 rounded-full -z-10"></span>
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-light">
            Full Stack Web Developer with <span className="font-bold text-slate-900">nearly 18 years</span> of programming experience, having started coding <span className="font-bold text-purple-500">at the age of 14</span>. Specialized in <span className="font-semibold text-slate-700">scalable web applications</span>, <span className="font-semibold text-slate-700">modern frontend and backend technologies</span>, <span className="font-semibold text-slate-700">UI/UX integration</span>, and <span className="font-bold text-purple-500">award-winning digital solutions</span>.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-20">
        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-500">Scroll</span>
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>
          <ChevronDown size={18} className="text-purple-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
