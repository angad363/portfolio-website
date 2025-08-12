import { motion } from 'framer-motion';
import CyclingText from './cycling-text';
import ParticleBackground from './particle-background';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-electric-blue via-purple-primary to-emerald-accent bg-clip-text text-transparent">Angad</span>
          </motion.h1>
          
          <div className="text-2xl md:text-3xl font-light mb-8 h-12">
            <CyclingText />
          </div>
          
          <motion.p 
            className="text-xl text-light-gray max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building scalable web applications, microservices, and cloud-native solutions with 3+ years of experience in modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-purple-primary rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
