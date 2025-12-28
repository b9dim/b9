import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Trophy, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Code,
      value: '18+',
      label: 'Years Experience',
      labelTablet: 'Experience',
      labelMobile: 'Years',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Trophy,
      value: 'Award',
      label: 'Winning Projects',
      labelTablet: 'Winning',
      labelMobile: 'Winning',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Sparkles,
      value: 'Full',
      label: 'Stack Expertise',
      labelTablet: 'Stack',
      labelMobile: 'Expert',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-[#fdfdfd]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-purple-200/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(#000 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Stats Badge */}
          <div
            className={`flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4
              bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-purple-100/50
              transition-all duration-1000 w-full max-w-4xl
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              hover:shadow-2xl hover:border-purple-200 hover:-translate-y-1`}
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 group flex-shrink-0"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl
                      bg-gradient-to-br ${stat.gradient}
                      flex items-center justify-center text-white
                      shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                      {stat.value}
                    </div>

                    <div
                      className="uppercase font-bold tracking-wider text-slate-500
                      text-[9px] sm:text-[10px] md:text-[11px] whitespace-nowrap"
                    >
                      <span className="sm:hidden">{stat.labelMobile}</span>
                      <span className="hidden sm:inline md:hidden">
                        {stat.labelTablet}
                      </span>
                      <span className="hidden md:inline">{stat.label}</span>
                    </div>
                  </div>

                  {idx < stats.length - 1 && (
                    <div className="w-px h-7 bg-slate-200 mx-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-9xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
            Abdullah <br />
            <span className="text-purple-500 italic font-light">Mohammed</span>
            <br />
            <span className="relative">
              Alasmari
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-4 bg-purple-500/10 -rotate-1 rounded-full -z-10" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-light">
            Full Stack Web Developer with{' '}
            <span className="font-bold text-slate-900">nearly 18 years</span> of
            programming experience, having started coding{' '}
            <span className="font-bold text-purple-500">at the age of 14</span>.
            Specialized in{' '}
            <span className="font-semibold text-slate-700">
              scalable web applications
            </span>
            ,{' '}
            <span className="font-semibold text-slate-700">
              modern frontend and backend technologies
            </span>
            ,{' '}
            <span className="font-semibold text-slate-700">UI/UX integration</span>
            , and{' '}
            <span className="font-bold text-purple-500">
              award-winning digital solutions
            </span>
            .
          </p>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-20">
        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-500">
          Scroll
        </span>
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" />
          <ChevronDown size={18} className="text-purple-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;