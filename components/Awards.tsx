
import React from 'react';
import { Award as AwardIcon, Trophy, Newspaper, Globe, Twitter } from 'lucide-react';

const Awards: React.FC = () => {
  const achievements = [
    { 
      title: "101 Ambition Award", 
      subtitle: "Al-Watan Newspaper - National Recognition",
      img: "/awards/award-1.jpg",
      badge: "National Award",
      icon: Trophy
    },
    { 
      title: "Commendation by H.E. Azzam Al-Dakhil", 
      subtitle: "Twitter recognition for trj.im sign language service",
      img: "/awards/award-2.jpg",
      badge: "Official Recognition",
      icon: Twitter
    },
    { 
      title: "Okaz Newspaper Feature", 
      subtitle: "Eastern Province - Innovation spotlight",
      img: "/awards/award-3.jpg",
      badge: "Press Coverage",
      icon: Newspaper
    },
    { 
      title: "4th Place - Aalam Al-Taqnia 2013", 
      subtitle: "Mobily Competition - National level achievement",
      img: "/awards/award-4.jpg",
      badge: "Competition Winner",
      icon: AwardIcon
    },
    { 
      title: "BBC Arabic Feature", 
      subtitle: "Global tech program coverage of trj.im",
      img: "/awards/award-5.jpg",
      badge: "International Media",
      icon: Globe
    },
    { 
      title: "BBC 4Tech Spotlight", 
      subtitle: "Saudi innovation on global stage",
      img: "/awards/award-6.jpg",
      badge: "Tech Spotlight",
      icon: Globe
    },
  ];

  return (
    <section id="awards" className="py-20 px-6 bg-[#0a0f1e] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Trophy size={14} className="text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">Documented Achievements</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">Honors & Recognition</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Verified milestones documented by local and international media
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-slate-900/60 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-purple-950/90 group-hover:via-purple-950/40 transition-all duration-500"></div>
                  
                  {/* Purple glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 transition-all duration-500"></div>
                </div>
                
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-1.5 group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                    <IconComponent size={10} className="group-hover:scale-110 transition-transform duration-300" />
                    {item.badge}
                  </div>
                </div>

                <div className="p-6 bg-slate-900/80 backdrop-blur-sm group-hover:bg-slate-900/90 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-1.5 leading-tight group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4th', label: 'National Competition' },
            { value: 'BBC', label: 'International Feature' },
            { value: '2x', label: 'BBC Coverage' },
            { value: '3+', label: 'Press Features' },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300 inline-block">{stat.value}</div>
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
