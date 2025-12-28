
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'b9di@hotmail.com',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '054 445 0453',
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-100/50 to-indigo-50',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jeddah, Saudi Arabia',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-purple-500">Get in Touch</h2>
          <p className="text-4xl md:text-5xl font-serif text-slate-900 font-bold">Professional Contact</p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl shadow-slate-200 border border-purple-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Contact Information</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="group/item relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br border border-purple-100/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 -z-10`}></div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform duration-500`}>
                      <IconComponent size={24} />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1 group-hover/item:text-slate-700 transition-colors duration-300">{item.label}</div>
                      <div className="font-medium text-slate-900 group-hover/item:text-purple-600 transition-colors duration-300">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 pt-12 border-t border-purple-100 text-center">
              <p className="text-slate-500 italic max-w-lg mx-auto leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                Available for high-impact technical roles and architectural consulting where deep expertise meets business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
