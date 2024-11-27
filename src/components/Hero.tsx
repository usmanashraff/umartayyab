import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { FadeUp, FadeIn } from './ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30" />
        <motion.img
          src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=1920"
          alt="Creative Art Background"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          priority="high"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-40"
      />

      <div className="relative z-10 text-center px-4">
        <FadeUp>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Hi, I'm Umar Tayyab</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Creative Designer
            </span>
          </h1>
        </FadeUp>

        <FadeIn>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Transforming ideas into visual experiences that leave lasting impressions
          </p>
        </FadeIn>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore My Work
          <ArrowDownCircle size={20} />
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDownCircle className="text-white/50" size={32} />
        </motion.div>
      </div>
    </section>
  );
}