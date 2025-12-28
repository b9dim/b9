
import React from 'react';
import { Home, Code, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Awards', href: '#awards', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 h-20">
            <a href="#home" className="flex items-center gap-4 group flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-serif font-black tracking-tighter text-slate-900">Abdullah Alasmari</span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-purple-500">FullStack Engineering</span>
              </div>
            </a>

            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group py-2 whitespace-nowrap ${
                      activeSection === link.href.substring(1) ? 'text-purple-500' : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-purple-500 transition-all whitespace-nowrap flex-shrink-0">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Top */}
      <nav className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-sm font-serif font-black tracking-tighter text-slate-900 leading-tight">Abdullah Alasmari</span>
              <span className="text-[7px] uppercase tracking-[0.2em] font-black text-purple-500 leading-tight">FullStack Engineering</span>
            </div>
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar - iOS Style */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 px-2 py-2 min-w-[60px] transition-all duration-200 active:scale-95 ${
                  isActive ? 'text-purple-600' : 'text-slate-500'
                }`}
              >
                <div className={`relative ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-200`}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                  )}
                </div>
                <span className={`text-[10px] font-semibold leading-tight ${isActive ? 'text-purple-600' : 'text-slate-500'}`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
