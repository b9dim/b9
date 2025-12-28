
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 space-y-8 text-left">
          <div className="flex items-center gap-5 justify-start">
            <div className="w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 duration-500">
              <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-black text-slate-900 leading-none">Abdullah Alasmari</span>
              <span className="text-xs uppercase tracking-[0.4em] font-black text-purple-500 mt-2">Full Stack Engineering</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Towards advanced digital engineering that touches community needs and makes a real difference in the software world.
          </p>
        </div>

        <div className="md:col-span-7 flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <a href="#home" className="text-sm font-bold text-slate-900 hover:text-purple-500 transition-colors">Home</a>
              <a href="#skills" className="text-sm font-bold text-slate-900 hover:text-purple-500 transition-colors">Skills</a>
              <a href="#experience" className="text-sm font-bold text-slate-900 hover:text-purple-500 transition-colors">Experience</a>
              <a href="#awards" className="text-sm font-bold text-slate-900 hover:text-purple-500 transition-colors">Awards</a>
            </div>
          </div>

          <div className="space-y-6 text-left md:text-right">
             <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400">Legal</h4>
             <div className="text-slate-900 font-bold text-sm tracking-wide">
               &copy; {new Date().getFullYear()} Abdullah Alasmari. All Rights Reserved.
             </div>
             <p className="text-slate-400 text-xs">
               Designed to reflect 18 years of accumulated technical expertise.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
