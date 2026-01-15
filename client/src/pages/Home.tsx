import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal } from "@/components/Terminal";
import { CyberButton } from "@/components/CyberButton";
import { SectionHeading } from "@/components/SectionHeading";
import LabelBadge from "@/components/ui/label-badges";
import { Shield, Cpu, Terminal as TerminalIcon, Award, GraduationCap, Briefcase, Mail, MapPin, Linkedin, Github, Globe, Search, BarChart } from "lucide-react";

import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const contactMutation = useSubmitContact();

  const statusLabels = [
    { id: 'status', name: 'System Status: ONLINE', color: '#22c55e', animate: true },
    { id: 'internship', name: 'Available for Internship', color: '#00f3ff' }
  ];
  
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const skillCategories = [
    {
      title: "Security Operations",
      skills: [
        { name: "Network Security", level: 90, icon: Shield },
        { name: "SIEM Analysis", level: 75, icon: BarChart },
        { name: "Vulnerability Scanning", level: 85, icon: Search }
      ]
    },
    {
      title: "Offensive Security",
      skills: [
        { name: "Ethical Hacking", level: 85, icon: TerminalIcon },
        { name: "Web App Security", level: 82, icon: Globe },
        { name: "Exploit Development", level: 70, icon: Cpu }
      ]
    },
    {
      title: "Administration",
      skills: [
        { name: "Linux Administration", level: 88, icon: Cpu },
        { name: "Network Defense", level: 85, icon: Shield }
      ]
    }
  ];

  const projects = [
    {
      id: "agronova",
      title: "AgroNova",
      subtitle: "Sustainable Agriculture & Supply Chain Security",
      desc: "An innovative platform focused on securing agricultural supply chains using blockchain and AI for threat detection.",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
      proof: [
        "Implemented end-to-end encryption for farmer-to-consumer communication.",
        "Integrated AI models to detect anomalies in supply chain logistics.",
        "Developed a secure dashboard for real-time monitoring of agricultural assets."
      ],
      tag: "Offensive",
      tagColor: "bg-red-500/20 text-red-400 border-red-500/30"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display font-bold text-2xl text-primary tracking-[0.2em] uppercase">
            Ash
          </div>
          <div className="hidden md:flex gap-8">
            {[
              { name: "About", to: "about" },
              { name: "Experience", to: "experience" },
              { name: "Skills", to: "skills" },
              { name: "Projects", to: "projects" },
              { name: "Contact", to: "contact" }
            ].map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                spy={true}
                activeClass="text-primary font-bold drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]"
                className="font-mono text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors uppercase tracking-wider"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <CyberButton size="sm" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </CyberButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LabelBadge labels={statusLabels} className="mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ashwin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Nethan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Cybersecurity Student | Aspiring Analyst | Ethical Hacker
            </p>
            <p className="mb-8 text-muted-foreground max-w-lg">
              Passionate about securing digital frontiers, ethical hacking, and network defense. 
              Based in Mangaluru, India.
            </p>
            <div className="flex flex-wrap gap-4">
              <CyberButton onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                View Skills
              </CyberButton>
              <CyberButton variant="outline" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                Experience
              </CyberButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <SectionHeading title="About Me" subtitle="Initializing user profile..." align="center" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative group">
              {/* Profile Image */}
              <div className="aspect-square rounded-2xl bg-secondary relative overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                <img 
                  src="https://i.postimg.cc/cJTSQJ2B/Whats-App-Image-2025-11-23-at-17-49-21-647fa574.jpg" 
                  alt="Ashwin Nethan" 
                  className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                
                {/* Cyber overlay elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/50 rounded-tr-xl group-hover:border-primary transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/50 rounded-bl-xl group-hover:border-primary transition-colors duration-500" />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-white">Exploring the Digital Frontier</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a dedicated cybersecurity student with a deep passion for understanding how systems work—and how to secure them. My journey involves rigorous self-study, active participation in CTFs, and hands-on practice in virtual labs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Currently pursuing my B.Tech, I am actively seeking internships and opportunities to apply my knowledge in real-world scenarios. My focus spans from network defense to offensive security strategies, always adhering to ethical standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded border border-white/5 hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group cursor-default"
                >
                  <h4 className="text-primary font-mono text-xl mb-1 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all">Active</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Learner Status</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded border border-white/5 hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group cursor-default"
                >
                  <h4 className="text-primary font-mono text-xl mb-1 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all">Open</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">To Work</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="Education" subtitle="Academic credentials loaded" />
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap size={100} />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono border border-primary/20">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                </div>
                <h4 className="text-lg text-primary/80 mb-2 font-display">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <SectionHeading title="Experience" subtitle="Practical application logs" align="right" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="cyber-card p-6 rounded-xl border-l-4 border-l-primary">
                  <h3 className="text-xl font-bold mb-2">Self-Directed Learning</h3>
                  <p className="text-primary font-mono text-sm mb-4">Aug 2025 - Present</p>
                  <p className="text-sm text-muted-foreground">
                    Independent researcher and practitioner focused on offensive and defensive security methodologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              {[
                "Conducted network security assessments using industry-standard tools.",
                "Practiced ethical hacking scenarios on TryHackMe and Hack The Box platforms.",
                "Administered Linux systems, focusing on hardening and security configurations.",
                "Explored SIEM tools for log analysis and incident detection.",
                "Developed scripts for automating basic security tasks."
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded bg-background/50 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="mt-1 min-w-[24px]">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeading title="Skills & Arsenal" subtitle="Capabilities matrix" align="center" />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {skillCategories.map((category, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="cyber-card rounded-xl border border-white/5 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xl font-bold text-white group-hover:text-primary transition-colors font-display">
                        {category.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 p-3 bg-secondary/20 rounded border border-white/5 hover:border-primary/30 transition-all group">
                          <skill.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                          <span className="text-sm font-mono text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
             {["Leadership", "Design Thinking", "Problem Solving", "Communication"].map((soft, i) => (
               <div key={i} className="bg-secondary/20 border border-white/5 p-4 rounded text-center text-sm font-mono text-muted-foreground hover:text-white hover:border-primary/50 transition-all">
                 {soft}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <SectionHeading title="Featured Projects" subtitle="Operational deployments" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="cyber-card group p-0 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-black relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded border uppercase ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary/70 text-xs font-mono mb-3 uppercase tracking-wider">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.desc}
                  </p>
                  <CyberButton 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Proof
                  </CyberButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-background border-primary/30 p-0 overflow-hidden">
          {selectedProject && (
            <div className="relative">
              <div className="h-64 bg-black relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className={`px-2 py-1 text-xs font-bold rounded border uppercase mb-2 inline-block ${selectedProject.tagColor}`}>
                    {selectedProject.tag}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-primary font-mono text-sm mt-1">{selectedProject.subtitle}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Mission Proof
                </h3>
                <div className="space-y-4">
                  {selectedProject.proof.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded border border-white/5 hover:border-primary/20 transition-all">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,243,255,0.8)] shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <CyberButton onClick={() => setSelectedProject(null)}>
                    Secure Session
                  </CyberButton>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Certifications Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Certifications" subtitle="Validated credentials" align="center" />
        </div>
        
        <div className="mt-12">
          <ImageAutoSlider 
            images={[
              "https://i.postimg.cc/6ptR3jX5/Screenshot-2026-01-15-122227.png",
              "https://i.postimg.cc/VLc0GG5W/Screenshot-2025-08-06-193320.png",
              "https://i.postimg.cc/65954D89/Screenshot-2025-11-25-134905.png",
              "https://i.postimg.cc/sDDsg7Nk/Screenshot-2026-01-09-130845.png"
            ]} 
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Contact Me" subtitle="Establish secure connection" />
              <p className="text-muted-foreground mb-8">
                Ready to collaborate on security projects or discuss potential opportunities? 
                Send a secure transmission below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground font-mono">Email</h4>
                    <p className="text-white">ashwinnethan07@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground font-mono">Location</h4>
                    <p className="text-white">Mangaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 font-mono text-xs uppercase">Identity</FormLabel>
                        <FormControl>
                          <Input placeholder="ENTER NAME" {...field} className="bg-background/50 border-white/10 focus:border-primary font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 font-mono text-xs uppercase">Return Address</FormLabel>
                        <FormControl>
                          <Input placeholder="ENTER EMAIL" {...field} className="bg-background/50 border-white/10 focus:border-primary font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 font-mono text-xs uppercase">Transmission</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="TYPE MESSAGE..." 
                            {...field} 
                            className="bg-background/50 border-white/10 focus:border-primary font-mono min-h-[120px]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CyberButton 
                    type="submit" 
                    className="w-full"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Transmitting..." : "Send Transmission"}
                  </CyberButton>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="font-display font-bold text-xl text-primary tracking-[0.2em] uppercase mb-4">
            Ash
          </div>
          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Ashwin Nethan. Secure System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "wouter";
