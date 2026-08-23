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
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Avatar />
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
              <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
                🎓 I am a recent B.Tech graduate in Information Technology from Madhuben & Bhanubhai Patel Institute of Technology (MBIT), Anand, Gujarat (2022–2026), with a CGPA of 8.09/10.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
                I specialize in developing scalable and efficient software solutions using Python and Django, with a strong focus on integrating AI/ML into real-world applications. My experience includes building SaaS platforms, designing robust backend systems, and implementing intelligent, data-driven features.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
                💼 I have professional experience as a Software Developer Intern at OM INFOSOLUTION INC, where I contributed to the development and maintenance of SaaS applications. My work involved designing MySQL/PostgreSQL database schemas, building RESTful APIs, and collaborating effectively using Git and GitHub.
              </p>
              
              <div className="mb-6">
                <p className="text-slate-200 text-lg font-semibold mb-3">Core competencies:</p>
                <ul className="text-slate-300 text-lg leading-relaxed space-y-2 list-none p-0 m-0">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Backend Development & System Design</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Scalable SaaS Architecture</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> AI/ML Integration</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Database Management & API Development</li>
                </ul>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 text-justify">
                I am passionate about building AI-powered systems, writing clean and maintainable code, and solving real-world problems through technology. I am currently seeking opportunities to contribute to innovative projects and grow within a dynamic development environment.
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
