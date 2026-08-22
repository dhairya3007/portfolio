import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Avatar from '../components/Avatar';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide">
              Available for New Opportunities
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 animate-gradient-xy">Dhairya Patel</span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-slate-300 mb-6"
            >
              Software Developer <span className="text-blue-500 mx-2">•</span> AI/ML Enthusiast <span className="text-violet-500 mx-2">•</span> Full-Stack
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Results-driven IT undergraduate with hands-on experience in Python development, AI/ML, and full-stack web development. Proficient in building production-ready applications using Django, Machine Learning, Deep Learning, and NLP.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link 
                to="/projects" 
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group"
              >
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl glass-card text-white font-medium flex items-center justify-center"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Avatar />
            </div>
          </motion.div>
        </section>

        {/* QUICK STATS */}
        <section className="w-full relative z-10 py-12 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Code size={28} className="text-blue-400" />, stat: "3+", label: "Projects Built", color: "from-blue-500 to-cyan-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <Briefcase size={28} className="text-violet-400" />, stat: "1", label: "Professional Internship", color: "from-violet-500 to-fuchsia-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
                { icon: <GraduationCap size={28} className="text-emerald-400" />, stat: "8.09", label: "CGPA", color: "from-emerald-400 to-teal-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-slate-500/50 hover:to-slate-700/50 transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                  <div className="bg-slate-900/90 backdrop-blur-xl h-full rounded-2xl p-6 flex items-center gap-5 z-10 relative overflow-hidden">
                    {/* Decorative glow behind icon */}
                    <div className={`absolute -top-10 -left-10 w-32 h-32 ${item.bg} blur-3xl rounded-full`}></div>
                    
                    <div className={`p-4 rounded-xl ${item.bg} ${item.border} border shadow-inner relative z-10 flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className={`text-3xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>{item.stat}</h3>
                      <p className="text-slate-400 text-sm font-medium tracking-wide mt-1 uppercase">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PREVIEW SECTIONS */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32 relative z-10">
          
          {/* Skills Teaser (Bento Box Style) */}
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-outfit font-bold mb-4">My Arsenal</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">A modern tech stack engineered for scalable performance and AI-driven solutions.</p>
              <Link to="/skills" className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 hover:border-slate-500 transition-all group">
                Explore All Skills <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Python', color: 'from-blue-400 to-blue-600' },
                { name: 'Django', color: 'from-emerald-400 to-emerald-600' },
                { name: 'React', color: 'from-cyan-400 to-cyan-600' },
                { name: 'AI/ML', color: 'from-violet-400 to-purple-600' },
                { name: 'MySQL', color: 'from-orange-400 to-orange-600' },
                { name: 'OpenCV', color: 'from-red-400 to-red-600' }
              ].map((skill, i) => (
                <div key={i} className="group relative p-px rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-slate-500 hover:to-slate-600 transition-all duration-300">
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 text-center h-full flex flex-col justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <span className="text-slate-200 font-medium text-lg relative z-10 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Teaser (Premium Style) */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-4xl font-outfit font-bold mb-3">Featured Projects</h2>
                <p className="text-slate-400 text-lg">AI-powered applications I've built recently.</p>
              </div>
              <Link to="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg group">
                View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Face Recognition Attendance', desc: 'AI-powered real-time attendance system using DeepFace and OpenCV.', color: 'from-blue-500 to-cyan-500' },
                { title: 'Virtual Career Advisor', desc: 'AI-driven career guidance platform using Django and NLP.', color: 'from-violet-500 to-purple-500' },
                { title: 'Vault-Bank Web App', desc: 'Cloud-deployed, production-ready backend architecture.', color: 'from-amber-500 to-orange-500', ongoing: true }
              ].map((proj, i) => (
                <div key={i} className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-slate-500/50 hover:to-slate-600/50 transition-all duration-500">
                  <div className="bg-slate-900/90 backdrop-blur-xl h-full rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[250px]">
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>
                    
                    <div className="relative z-10 mt-auto">
                      <div className="flex justify-between items-start mb-4">
                        <div className="inline-block p-3 rounded-lg bg-slate-800/80 group-hover:-translate-y-2 transition-transform duration-300">
                          <Code size={24} className="text-blue-400" />
                        </div>
                        {proj.ongoing && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            Ongoing Project
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                      <p className="text-slate-400">{proj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Teaser */}
          <div className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 hover:from-blue-500/50 hover:via-violet-500/50 hover:to-fuchsia-500/50 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold tracking-wide mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                    </span>
                    Current Role
                  </div>
                  <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Software Developer Intern</h2>
                  <h3 className="text-xl text-blue-400 font-medium mb-4">OM INFOSOLUTION INC</h3>
                  <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
                    Developing and maintaining SaaS web application features using Python, Django, MySQL, and PostgreSQL while collaborating in an agile environment.
                  </p>
                  <Link to="/experience" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Read the Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </PageTransition>
  );
}
