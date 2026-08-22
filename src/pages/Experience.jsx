import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Work Experience</h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
          {/* Timeline Dot */}
          <div className="absolute top-4 -left-[17px] md:-left-[21px] bg-slate-900 p-1 rounded-full border-2 border-blue-500">
            <div className="bg-blue-500 rounded-full p-2">
              <Briefcase size={20} className="text-white" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/60 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-slate-500 transition-colors shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Software Developer Intern</h2>
                <h3 className="text-xl text-blue-400 font-medium">OM INFOSOLUTION INC</h3>
              </div>
              <div className="flex flex-col gap-2 text-slate-400 text-sm">
                <div className="flex items-center gap-2 md:justify-end">
                  <Calendar size={16} />
                  <span>Jan 2026 – Present</span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <MapPin size={16} />
                  <span>Anand, Gujarat</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm font-medium border border-slate-600">
                Project: SAAS-APP
              </span>
            </div>

            <ul className="space-y-4 text-slate-300 leading-relaxed list-disc list-outside ml-4">
              <li className="pl-2">
                Developed and maintained web application features using <strong className="text-slate-100">Python</strong> and <strong className="text-slate-100">Django</strong>, contributing to both frontend templates and backend logic.
              </li>
              <li className="pl-2">
                Designed and optimized relational database schemas in <strong className="text-slate-100">MySQL</strong> and managed SQL data in <strong className="text-slate-100">PostgreSQL</strong> for various application modules.
              </li>
              <li className="pl-2">
                Built and integrated <strong className="text-slate-100">RESTful APIs</strong> to connect frontend interfaces with backend services, improving data flow and system responsiveness.
              </li>
              <li className="pl-2">
                Identified and resolved software bugs through systematic code reviews, reducing reported issues and improving application stability.
              </li>
              <li className="pl-2">
                Collaborated with the development team using <strong className="text-slate-100">Git and GitHub</strong> for version control, ensuring clean commit history and efficient code.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
