import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: name, email, and message are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        subject: subject || "No subject",
        message: message.substring(0, 100) + (message.length > 100 ? "..." : ""),
        timestamp: new Date().toISOString()
      });

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with email service (SendGrid, etc.)
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));

      res.json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        success: true 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Portfolio data endpoint (optional - for future use)
  app.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioData = {
        name: "Angad Anil Gosain",
        title: "Software Engineer",
        location: "Santa Ana, CA",
        email: "angadgosain@gmail.com",
        phone: "+1 (689) 250-9481",
        linkedin: "https://linkedin.com/in/angad-gosain/",
        github: "https://github.com/angad363",
        summary: "Software Engineer with 3+ years' experience building scalable web applications, microservices, and cloud-native solutions.",
        skills: {
          languages: ["Java", "Python", "JavaScript", "TypeScript"],
          frameworks: ["Spring Boot", "FastAPI", "Node.js", "React.js", "Next.js"],
          databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
          cloud: ["AWS", "Docker", "Jenkins"]
        },
        experience: [
          {
            title: "Software Engineer",
            company: "Capital One",
            location: "Remote",
            period: "June 2023 – Present",
            achievements: [
              "Achieved a 3× boost in system concurrency by refactoring a monolithic banking system into Spring Boot/Node.js based microservices",
              "Drove ~50% drop in fraud incidents over 6 months by integrating an ML-based fraud detection REST API",
              "Cut manual reporting time by 3–4 hours/week by delivering a React-based real-time financial dashboard"
            ]
          }
        ]
      };

      res.json(portfolioData);
    } catch (error) {
      console.error("Portfolio data error:", error);
      res.status(500).json({ 
        message: "Failed to fetch portfolio data" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
