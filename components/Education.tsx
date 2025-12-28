
import React from 'react';
import { GraduationCap, MapPin, Calendar, Globe, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-purple-500">Education & Training</h2>
          <p className="text-4xl md:text-5xl font-serif text-slate-900 font-bold">Academic Excellence</p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="group relative bg-white p-10 rounded-3xl border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Decorative icon */}
            <div className="absolute top-[-20px] right-[-20px] text-purple-200 opacity-20 group-hover:rotate-12 transition-transform duration-700">
              <GraduationCap size={200} />
            </div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="space-y-8 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">English Language & Professional Skills</h3>
                </div>
                <div className="flex items-center gap-2 text-purple-500 font-bold mb-4">
                  <MapPin size={18} />
                  <span>Liverpool, United Kingdom</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Summer programs attended annually <span className="font-bold text-slate-900">(2022–2025)</span> at <span className="text-purple-500 font-bold">NCG & LILA*</span> institutes.
                </p>
              </div>

              <div className="flex items-center gap-3 py-4 px-6 bg-white rounded-2xl border border-purple-100 inline-flex shadow-sm group-hover:border-purple-200 transition-colors duration-300">
                <Calendar className="text-purple-500" size={20} />
                <span className="font-semibold text-slate-700">Ongoing Professional Development</span>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 p-10 rounded-3xl border border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Decorative icon */}
            <div className="absolute top-[-20px] right-[-20px] text-purple-200 opacity-30 group-hover:rotate-12 transition-transform duration-700">
              <Award size={200} />
            </div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Award size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Certified Training Courses</h3>
                </div>
                <div className="flex items-center gap-2 text-purple-500 font-bold mb-4">
                  <MapPin size={18} />
                  <span>Saudi Arabia</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">472 hours</span> of certified training courses with accredited certificates from the Kingdom of Saudi Arabia.
                </p>
              </div>

              <div className="flex items-center gap-3 py-4 px-6 bg-white rounded-2xl border border-purple-200 inline-flex shadow-sm group-hover:border-purple-300 transition-colors duration-300">
                <Award className="text-purple-500" size={20} />
                <span className="font-semibold text-slate-700">Saudi Arabia Accredited Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
