
import React from 'react';
import { Code, Database, Layout, PenTool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Code size={28} />,
      items: ['PHP', 'Laravel', 'Node.js', 'Express'],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50',
    },
    {
      title: 'Databases',
      icon: <Database size={28} />,
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-100/50 to-indigo-50',
    },
    {
      title: 'Frontend',
      icon: <Layout size={28} />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
    },
    {
      title: 'Design Tools',
      icon: <PenTool size={28} />,
      items: ['Advanced Adobe Creative Suite', '(Photoshop, Illustrator, XD)'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-purple-500">Core Skills</h2>
          <p className="text-4xl md:text-5xl font-serif text-slate-900 font-bold">Technical Expertise</p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-3xl bg-gradient-to-br border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              {/* Icon container */}
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx} 
                    className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
