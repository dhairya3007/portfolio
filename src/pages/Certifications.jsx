import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const certifications = [
  {
    title: "Core Java Specialization",
    issuer: "Coursera",
    date: "April 2024",
    desc: "Comprehensive coursework covering core Java concepts, OOP principles, and data structures."
  },
  {
    title: "Introduction to Structured Query Language (SQL)",
    issuer: "Coursera",
    date: "September 2023",
    desc: "Mastery of SQL queries, database design, and relational database management."
  },
  {
    title: "Power BI Workshop",
    issuer: "MBIT",
    date: "2023",
    desc: "Data visualization, dashboard creation, and business analytics training."
  }
];

const achievements = [
  {
    title: "Top 6 Finalist – DAIICT Hackathon",
    desc: "Demonstrated advanced problem-solving and team collaboration in a competitive environment by building a complete software solution within 48 hours."
  },
  {
    title: "Winner – Business & Entrepreneurship Event",
    desc: "Recognized for innovation and entrepreneurial thinking at MBIT College's annual tech-fest."
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Certifications & Achievements</h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="text-blue-500" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="text-blue-400 font-medium">{cert.issuer}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{cert.date}</span>
                  </div>
                  <p className="text-slate-300">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <Trophy className="text-violet-500" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-violet-500/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
