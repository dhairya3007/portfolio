import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Avatar from '../components/Avatar';

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 border-2 border-slate-700 rounded-full -m-4 scale-105 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full -m-8 scale-110 animate-[spin_15s_linear_infinite_reverse]"></div>
              <Avatar className="w-full h-full" />
            </div>
          </motion.div>

          {/* Right Side: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-2/3"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I am a final-year B.Tech Information Technology student at Madhuben and Bhanubhai Patel Institute of Technology (MBIT), Anand, Gujarat (2022–2026), with a CGPA of 8.09/10. I specialize in building scalable, real-world software solutions using Python, Django, and AI/ML technologies.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I have professional experience as a Software Developer Intern at OM INFOSOLUTION INC, where I developed and maintained SaaS application features, designed MySQL/PostgreSQL database schemas, built RESTful APIs, and collaborated using Git/GitHub. I am passionate about AI-powered systems, clean code, and solving real-world problems through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-slate-200 font-medium">Anand, Gujarat, India</p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                <Mail className="text-violet-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:dhairyapatel3007@gmail.com" className="text-slate-200 font-medium hover:text-blue-400 transition-colors">
                    dhairyapatel3007@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href="tel:+919898794846" className="text-slate-200 font-medium hover:text-blue-400 transition-colors">
                    +91 98987 94846
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap size={100} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <GraduationCap className="text-blue-400" size={24} /> Education
              </h3>
              <p className="text-lg text-slate-200 font-medium">Bachelor of Technology – Information Technology</p>
              <p className="text-slate-400">MBIT Anand &bull; 2022–2026</p>
              <div className="mt-4 inline-block bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20">
                CGPA: 8.09/10
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
