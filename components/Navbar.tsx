
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-serif font-black tracking-tighter text-slate-900">Abdullah Alasmari</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-purple-500">FullStack Engineering</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                activeSection === link.href.substring(1) ? 'text-purple-500' : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a href="#contact" className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-purple-500 transition-all">
          GET IN TOUCH
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif font-bold p-4 rounded-2xl transition-colors ${
                  activeSection === link.href.substring(1) ? 'bg-purple-50 text-purple-500' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
