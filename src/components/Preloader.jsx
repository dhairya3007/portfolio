import { motion } from 'framer-motion';

export default function Preloader() {
  const text = "Dhairya";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Gradient Mesh / Animated Background for Preloader */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px] mix-blend-screen animate-float-slow"></div>
        <div className="absolute top-[30%] right-[20%] w-[35%] h-[35%] rounded-full bg-violet-600/20 blur-[100px] mix-blend-screen animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[20%] left-[40%] w-[45%] h-[45%] rounded-full bg-fuchsia-600/20 blur-[100px] mix-blend-screen animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <motion.div
        layoutId="brand-logo"
        className="text-5xl md:text-7xl font-outfit font-bold tracking-tighter text-white flex items-center overflow-hidden relative z-10 drop-shadow-2xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index} className="inline-block">
            {letter}
          </motion.span>
        ))}
        <motion.span
          variants={child}
          className="text-blue-500 inline-block"
        >
          .
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
