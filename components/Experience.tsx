
import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-purple-500">Experience</h2>
          <p className="text-4xl md:text-5xl font-serif text-slate-900 font-bold leading-tight">Professional History</p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-purple-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Full Stack Web Developer</h3>
                <p className="text-slate-500 font-medium">2006 — Present</p>
              </div>
            </div>
            
            <ul className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <li className="flex gap-4 group/item">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                <span className="group-hover/item:text-slate-900 transition-colors duration-300">End-to-end web applications, APIs, database design, and UI/UX integration.</span>
              </li>
              <li className="flex gap-4 group/item">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                <span className="group-hover/item:text-slate-900 transition-colors duration-300">Delivered award-winning and publicly recognized projects with real social impact.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
