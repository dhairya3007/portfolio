import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const projectsData = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    date: "March 2025",
    shortDesc: "AI-powered real-time attendance system automating the attendance process.",
    description: "Built an AI-powered real-time attendance system using DeepFace and OpenCV, automating the attendance process for registered users. Implemented user registration workflow capturing Name, Enrollment No., and Email with automated confirmation and attendance notification via SMTP. Developed attendance search by enrollment number and integrated Excel export using Pandas for data reporting.",
    techStack: ["Python", "DeepFace", "OpenCV", "SMTP", "Pandas", "SQLite"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Intelligent Virtual Career Advisor",
    date: "April 2025",
    shortDesc: "AI-driven career guidance platform delivering personalized job recommendations.",
    description: "Developed an AI-driven career guidance platform using Django and NLP to deliver personalized job recommendations based on user skill profiles. Integrated job market APIs (JSearch, Cohere) to compare user competencies against industry requirements and suggest targeted career paths. Incorporated resume optimization tips, interview preparation resources, and networking guidance to provide end-to-end career support.",
    techStack: ["Python", "Django", "SQLite3", "NLP", "Cohere API", "JSearch API"],
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 3,
    title: "Medicare – Medical E-Commerce",
    date: "September 2025",
    shortDesc: "Full-stack medical e-commerce platform with real-time stock management.",
    description: "Built a full-stack medical e-commerce platform using Django with secure user authentication, order history tracking, and a customized admin panel. Designed a medicine inventory database with real-time stock management, image uploads, and a keyword-based search feature. Implemented a shopping cart and checkout system with discount calculation, billing generation, and order processing.",
    techStack: ["Python", "Django", "MySQL", "HTML", "CSS"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    demoLink: "https://medical-shop-5y9j.onrender.com"
  },
  {
    id: 4,
    title: "Medicare Management SaaS",
    date: "October 2025",
    shortDesc: "Multi-tenant SaaS pharmacy and medical shop management system for retail healthcare operations.",
    description: "A multi-tenant SaaS pharmacy and medical shop management system designed for managing retail healthcare operations. It handles end-to-end pharmacy workflows including medicine cataloging, batch and expiry date tracking, supplier management, and low-stock alerts. It also provides a complete sales and billing platform with order checkout, PDF invoice generation, and downloadable reports. Additionally, it supports multiple pharmacy organizations with isolated data, cross-network inventory searches, real-time analytics dashboards, and AI assistant capabilities.",
    techStack: ["Python", "Django", "PostgreSQL", "React", "Tailwind CSS"],
    gradient: "from-rose-500/20 to-pink-500/20",
    demoLink: "https://medicare-saas.onrender.com/",
    video: "/WhatsApp Video 2026-08-22 at 2.53.28 PM.mp4#t=0.2"
  },
  {
    id: 5,
    title: "Full-Stack Django Web Application",
    date: "Ongoing",
    shortDesc: "A production-ready full-stack Django web app demonstrating structured backend architecture.",
    description: "This project is a full-stack Django web application developed to demonstrate practical implementation of backend logic, database handling, and responsive frontend design. It is deployed on PythonAnywhere without complex server setup. The application showcases real-world web development concepts including dynamic content rendering, user interaction, and structured backend architecture.",
    techStack: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript", "PythonAnywhere"],
    gradient: "from-amber-500/20 to-orange-500/20",
    demoLink: "https://www.pythonanywhere.com"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      // Prevent background scrolling and jumping by adding padding to compensate for scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Featured Projects</h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-slate-500/50 hover:to-slate-700/50 transition-all duration-500 shadow-2xl flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl blur-xl"></div>
              
              <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 relative overflow-hidden h-full z-10 flex flex-col">
                <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${project.gradient} mb-8 overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow flex items-center justify-center`}>
                  {project.video ? (
                    <video 
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen group-hover:mix-blend-normal transform group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <div className="p-4 bg-slate-900/50 backdrop-blur-md rounded-2xl transform group-hover:scale-110 transition-transform duration-500">
                        <Code size={32} className="text-blue-400" />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h2>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-800/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-semibold text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="w-full py-3 rounded-xl bg-blue-600/10 group-hover:bg-blue-600 hover:bg-blue-500 text-blue-400 group-hover:text-white font-medium border border-blue-500/30 group-hover:border-transparent transition-all flex items-center justify-center gap-2">
                    View Details <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[60]"
              />
              <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-slate-800 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto"
                >
                  <div className="sticky top-0 bg-slate-800/95 backdrop-blur border-b border-slate-700 p-4 flex justify-between items-center z-10">
                    <h3 className="text-xl font-bold text-white pr-8">{selectedProject.title}</h3>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2 text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-full transition-colors absolute right-4"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <p className="text-blue-400 font-medium mb-6">{selectedProject.date}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-lg border border-blue-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {selectedProject.demoLink && (
                      <div className="border-t border-slate-700 pt-6">
                        <a 
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
                        >
                          Visit Live Demo <ExternalLink size={18} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
