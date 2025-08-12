import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Database, Cloud, Cpu } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="bg-gradient-to-r from-electric-blue to-purple-primary bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          {/* Bento Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Bio Card */}
            <motion.div 
              className="md:col-span-2 lg:col-span-2 bg-dark-surface/50 rounded-3xl p-8 border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-purple-primary rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0">
                  AG
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Angad Anil Gosain</h3>
                  <p className="text-light-gray leading-relaxed mb-4">
                    Software Engineer with expertise in Java, Python, React.js, and AWS. Experienced in building microservices architecture, implementing secure authentication systems, and optimizing performance in cloud-native environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-purple-primary/20 text-purple-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-emerald-accent/20 text-emerald-accent rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm">AWS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              className="bg-dark-surface/50 rounded-3xl p-6 border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <MapPin className="w-8 h-8 text-electric-blue mb-4 mx-auto" />
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-light-gray">Santa Ana, CA</p>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              className="bg-dark-surface/50 rounded-3xl p-6 border border-white/10 hover:border-purple-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <GraduationCap className="w-8 h-8 text-purple-primary mb-4 mx-auto" />
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-light-gray text-sm">MS Computer Science</p>
                <p className="text-light-gray text-sm">UCF, 2024</p>
              </div>
            </motion.div>

            {/* Skills Overview */}
            <motion.div 
              className="md:col-span-3 lg:col-span-4 bg-dark-surface/50 rounded-3xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <h4 className="text-2xl font-bold mb-6 text-center">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-electric-blue" />
                    <h5 className="text-lg font-semibold text-electric-blue">Languages</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-5 h-5 text-purple-primary" />
                    <h5 className="text-lg font-semibold text-purple-primary">Frameworks</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">FastAPI</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-5 h-5 text-emerald-accent" />
                    <h5 className="text-lg font-semibold text-emerald-accent">Databases</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MySQL</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Redis</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Cloud className="w-5 h-5 text-electric-blue" />
                    <h5 className="text-lg font-semibold text-electric-blue">Cloud & DevOps</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Docker</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Jenkins</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Kubernetes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
