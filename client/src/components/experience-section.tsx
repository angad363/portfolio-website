import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Capital One",
      location: "Remote",
      period: "June 2024 – Present",
      color: "electric-blue",
      achievements: [
        "Achieved a 3× boost in system concurrency by refactoring monolithic banking system into Spring Boot/Node.js microservices",
        "Drove ~50% drop in fraud incidents by integrating ML-based fraud detection REST API (FastAPI)",
        "Improved compliance readiness by 75% by implementing secure authentication with JWT, OAuth 2.0, and role-based access control (RBAC)"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Capital One",
      location: "Remote",
      period: "June 2023 – May 2024",
      color: "purple-primary",
      achievements: [
        "Cut manual reporting time by 3–4 hours/week by leading cross-functional collaboration to deliver a React-based real-time financial dashboard",
        "Decreased average query latency by 50% in AWS RDS analytics pipelines by coordinating with data engineers to tune Apache Spark ETL jobs",
        "Reduced incident detection and recovery times by ~3 hours by spearheading Prometheus and ELK Stack-based observability tooling development"
      ]
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      period: "October 2020 – July 2022",
      color: "emerald-accent",
      achievements: [
        "Improved system uptime by ~25% by maintaining 10+ Java Spring Boot microservices, reducing production support tickets",
        "Accelerated feature delivery by 2 sprint cycles by collaborating with cross-functional teams to design scalable RESTful APIs and implement service-oriented architecture (SOA)",
        "Reduced database latency from 120ms to 85ms by working closely with database and infrastructure teams to implement Redis caching",
        "Increased throughput by 30% by developing Apache Kafka-based asynchronous event pipelines"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Punjab Maharashtra Cooperative Bank",
      location: "Mumbai, India",
      period: "June 2019 – July 2019",
      color: "electric-blue",
      achievements: [
        "Developed in-house applications using advanced Java concepts, including Servlets and Design Patterns, contributing to the enhancement of the bank's software infrastructure",
        "Conducted code reviews and debugging sessions, employing techniques like backtracking and problem simplification",
        "Embraced Agile software development life cycle, actively collaborating with cross-functional teams to deliver high-quality software within project timelines",
        "Participated in code reviews and provided constructive feedback to other developers"
      ]
    },
    {
      title: "Frontend Web Developer",
      company: "Conscript",
      location: "Mumbai, India",
      period: "August 2017 – September 2017",
      color: "purple-primary",
      achievements: [
        "Developed frontend design of web pages using HTML, CSS and Javascript",
        "Collaborated with the design team to develop visually appealing and user-friendly website layouts, ensuring a seamless user experience",
        "Implemented responsive web design techniques to optimize the website for different screen sizes and devices",
        "Actively participated in team meetings, providing valuable insights and suggestions for enhancing the user interface and user experience of the website"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work <span className="bg-gradient-to-r from-electric-blue to-purple-primary bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-purple-primary to-emerald-accent"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute left-6 w-4 h-4 bg-${exp.color} rounded-full border-4 border-deep-black`}></div>
                  <motion.div 
                    className={`bg-dark-surface/50 rounded-2xl p-8 border border-white/10 hover:border-${exp.color}/50 transition-all duration-300`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className={`text-${exp.color} font-semibold`}>{exp.period}</span>
                    </div>
                    <h4 className={`text-xl text-${exp.color} mb-4`}>{exp.company} – {exp.location}</h4>
                    <ul className="space-y-3 text-light-gray">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ArrowRight className={`text-${exp.color} mt-1 w-4 h-4 flex-shrink-0`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
