import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

import { Terminal, LayoutTemplate, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={32} className="text-blue-400" />,
      color: "from-blue-500 to-cyan-400",
      skills: ["Python", "JavaScript", "HTML5", "CSS3", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <LayoutTemplate size={32} className="text-emerald-400" />,
      color: "from-emerald-400 to-teal-400",
      skills: ["Django", "React.js", "Tailwind CSS", "Bootstrap", "OpenCV", "TensorFlow", "scikit-learn"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={32} className="text-orange-400" />,
      color: "from-orange-400 to-red-400",
      skills: ["MySQL", "PostgreSQL", "Git", "GitHub", "Vite", "Framer Motion"]
    },
    {
      title: "Core Competencies",
      icon: <Brain size={32} className="text-violet-400" />,
      color: "from-violet-500 to-fuchsia-400",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Face Recognition", "REST APIs", "Agile Methodology"]
    }
  ];

  return (
    <PageTransition>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="mb-16">
          <h1 className="text-5xl font-outfit font-extrabold tracking-tight mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Skills</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-slate-500/50 hover:to-slate-700/50 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              
              <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 relative overflow-hidden h-full z-10 flex flex-col">
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${category.color} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner group-hover:-translate-y-1 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-outfit font-bold">{category.title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
