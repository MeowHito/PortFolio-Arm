"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import ScrambleText from "@/components/ScrambleText";
import MagneticButton from "@/components/MagneticButton";
import { projects, Project } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    try {
      const response = await fetch("http://localhost:3002/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus("success");
        setFormMessage("Message sent successfully! ✨");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setFormStatus("error");
        setFormMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Unable to connect to server. Please try again later.");
    }
  };
  return (
    <div className="parallax-container">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      <ParallaxBackground />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Scrollytelling */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-[var(--primary)] text-sm tracking-widest uppercase mb-4 block">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured{" "}
                <span className="gradient-text">
                  <ScrambleText text="Projects" className="gradient-text" />
                </span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                A collection of my best work showcasing my skills in web development,
                design, and problem-solving.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid with staggered reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                direction="up" 
                delay={index * 0.1}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Scrollytelling */}
      <section id="about" className="relative z-10 py-24 px-4 md:px-8">
        <ScrollReveal direction="scale">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Avatar/Image */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative">
                  <MagneticButton strength={0.15}>
                    <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1 hover:shadow-2xl hover:shadow-[var(--accent)]/30 transition-shadow duration-500">
                      <div className="w-full h-full rounded-full bg-[var(--surface)] flex items-center justify-center">
                        <span className="text-6xl font-bold gradient-text">
                          <ScrambleText text="NP" />
                        </span>
                      </div>
                    </div>
                  </MagneticButton>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-72 h-72 mx-auto rounded-full border border-[var(--primary)]/20 -top-4 animate-pulse" />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal direction="right" delay={0.3}>
                <div>
                  <span className="text-[var(--primary)] text-sm tracking-widest uppercase mb-4 block">
                    About Me
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Hi, I'm a{" "}
                    <span className="gradient-text">
                      <ScrambleText text="Developer" className="gradient-text" />
                    </span>
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                    I'm passionate about creating beautiful, functional, and user-centered
                    digital experiences. With expertise in modern web technologies, I bring
                    ideas to life through clean code and thoughtful design.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(
                      (skill, index) => (
                        <MagneticButton key={skill} strength={0.3}>
                          <span
                            className="px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm border border-[var(--primary)]/20 hover:bg-[var(--primary)]/20 hover:scale-105 transition-all duration-300 cursor-default inline-block"
                          >
                            <ScrambleText text={skill} />
                          </span>
                        </MagneticButton>
                      )
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4 md:px-8">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[var(--primary)] text-sm tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Work{" "}
              <span className="gradient-text">
                <ScrambleText text="Together" className="gradient-text" />
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-12">
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something amazing together.
            </p>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <ScrollReveal direction="left" delay={0.1}>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl glass border border-[var(--primary)]/20 bg-transparent text-white placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] focus:shadow-lg focus:shadow-[var(--primary)]/10 transition-all duration-300"
                  />
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.1}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl glass border border-[var(--primary)]/20 bg-transparent text-white placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] focus:shadow-lg focus:shadow-[var(--primary)]/10 transition-all duration-300"
                  />
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.2}>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl glass border border-[var(--primary)]/20 bg-transparent text-white placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)] focus:shadow-lg focus:shadow-[var(--primary)]/10 transition-all duration-300 resize-none"
                />
              </ScrollReveal>
              
              {/* Status Message */}
              {formMessage && (
                <div className={`text-center py-3 rounded-xl ${
                  formStatus === "success" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {formMessage}
                </div>
              )}
              
              <ScrollReveal direction="up" delay={0.3}>
                <MagneticButton strength={0.2}>
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full md:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ScrambleText text={formStatus === "loading" ? "Sending..." : "Send Message"} />
                  </button>
                </MagneticButton>
              </ScrollReveal>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-[var(--surface-light)]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[var(--text-secondary)] text-sm">
            © 2026 Portfolio By narongpol.
          </span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <MagneticButton key={social} strength={0.4}>
                <a
                  href="#"
                  className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                >
                  <ScrambleText text={social} />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
