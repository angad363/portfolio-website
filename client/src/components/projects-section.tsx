import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "DevSage",
      description: "Built a SaaS platform for collaborative code management, integrating AI-driven commit summaries and GitHub API, reducing manual code reviews by 40%. Enables linking GitHub repositories, generating AI-driven insights on commits, querying an AI chatbot for deep repository insights, and summarizing meetings using AI.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Next.js", "tRPC", "TypeScript", "LangChain", "Gemini"],
      color: "electric-blue",
      github: "https://github.com/angad363/devsage",
      demo: "https://devsage.vercel.app"
    },
    {
      title: "FinTrack",
      description: "Engineered financial tracking SaaS with real-time transaction visualization, empowering 500+ users with automated bank integration. Allows users to track personal expenses and securely connect to their real bank accounts for seamless financial management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Plaid API", "Stripe"],
      color: "purple-primary",
      github: "https://github.com/angad363/fintrack",
      demo: "https:/https://fintrack-gamma.vercel.app/"
    },
    {
      title: "Companion.ai",
      description: "Companion.ai is a web app that allows you to create and chat with an AI companion. Customize your companion's personality and see how they respond to your questions. Create and chat with your own custom AI companion, customize your companion's personality with instructions and sample chats, get AI-powered responses powered by OpenAI, change your companion's profile picture, light and dark mode, secured account creation and login with Clerk.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Next.js", "TypeScript", "OpenAI"],
      color: "emerald-accent",
      github: "https://github.com/angad363/companion-ai",
      demo: "https://companion-ai.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="bg-gradient-to-r from-electric-blue to-purple-primary bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-dark-surface/50 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 text-${project.color}`}>{project.title}</h3>
                  <p className="text-light-gray mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className={`px-3 py-1 bg-${project.color}/20 text-${project.color} rounded-full text-sm`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-${project.color} hover:text-white transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-${project.color} hover:text-white transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* GitHub Card */}
            <motion.div
              className="group bg-gradient-to-br from-electric-blue/10 to-purple-primary/10 rounded-3xl border border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 flex items-center justify-center p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={48} className="text-electric-blue mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">View More Projects</h3>
                <p className="text-light-gray mb-4">Explore my complete portfolio on GitHub</p>
                <motion.a
                  href="https://github.com/angad363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue/20 text-electric-blue rounded-full hover:bg-electric-blue hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit GitHub</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
