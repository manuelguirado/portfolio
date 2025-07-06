"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Code,
  Database,
  Server,
  Container,
  TestTube,
  Globe,
  FileText,
  Layers,
  Palette,
  GitBranch,
  Cloud,
  Terminal,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "../components/contact-form"

export default function Portfolio() {
  const projects = [
    {
      name: "ChatFriends",
      description:
        "RESTful API for a chat application with user authentication, real-time messaging, and media uploads. Includes comprehensive testing and Docker deployment.",
      techStack: ["TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
      github: "https://github.com/manuelguirado/chatFriends",
      demo: "https://chat-friends-alpha.vercel.app/",
    },
    {
      name: "Task Manager API",
      description:
        "API for managing tasks with authentication, PostgreSQL, and full test coverage. Deployed with Docker and CI/CD integration.",
      techStack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Jest", "Docker"],
      github: "https://github.com/manuelguirado/to-do-api",
      demo: "",
    },
  ]

  const techStack = [
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Workflow },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Container },
    { name: "Jest", icon: TestTube },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "AWS", icon: Cloud },
    { name: "Socket.io", icon: Workflow },
    { name: "Terminal", icon: Terminal },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">manudev</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Building scalable backend systems with TypeScript, Docker, and TDD.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              asChild
            >
              <Link href="../portfolio/public/CV_ManuelGuirado_EN.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">About Me</h2>
          <Card className="bg-slate-900/50 border-slate-800 shadow-2xl">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                I'm a passionate backend developer with over 2 years of experience building robust, scalable systems. My
                journey began with JavaScript and evolved into a deep specialization in TypeScript and Node.js
                ecosystems. I believe in writing clean, testable code and following best practices like Test-Driven
                Development (TDD).
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                I've worked with both SQL and NoSQL databases, containerized applications with Docker, and I'm always eager to learn new technologies and solve complex problems that
                make a real impact. I’m also diving into AWS cloud services to expand my DevOps knowledge and be ready for production-grade systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Soft Skills & Values</h2>
          <p className="text-lg text-slate-300">
            I am a fast learner, proactive, and committed to continuous growth. I adapt quickly to new environments and love collaborating with teams to build high-impact solutions.
            I value clean code, teamwork, and delivering real value to users.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-800 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <IconComponent className="h-12 w-12 text-blue-400 mb-3" />
                    <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-300">
              I'm always interested in new opportunities and exciting projects. Whether you need a backend developer for
              your team or want to discuss a project idea, I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-6">
              <Card className="bg-slate-900/50 border-slate-800 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      asChild
                    >
                      <Link href="https://linkedin.com/in/manuelguirado" target="_blank">
                        <Linkedin className="mr-3 h-5 w-5" />
                        Connect on LinkedIn
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                      asChild
                    >
                      <Link href="https://github.com/manuelguirado" target="_blank">
                        <Github className="mr-3 h-5 w-5" />
                        View GitHub Profile
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                  <p className="text-slate-300">
                    I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out on
                    LinkedIn for faster communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} manudev. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
