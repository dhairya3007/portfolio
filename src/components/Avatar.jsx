import { motion } from 'framer-motion';

export default function Avatar({ className = '' }) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Glow effect behind the image */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/50 to-violet-500/50 blur-2xl"></div>
      
      {/* Actual Avatar Image */}
      <img
        src="/Gemini_Generated_Image_9egi6n9egi6n9egi-removebg-preview.png"
        alt="Dhairya Patel"
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      />
    </motion.div>
  );
}
