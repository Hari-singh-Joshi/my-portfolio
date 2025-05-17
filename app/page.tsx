"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Laptop, Palette, Mail, Github, Linkedin, Twitter } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit">Available for Freelance</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Hari Singh Joshi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Full-Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                I create beautiful, functional websites and applications that help businesses grow and succeed in the
                digital world.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/project">
                  <Button size="lg">View My Work</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://github.com/Hari-singh-Joshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hari-singh-joshi-4499b326b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </motion.div>
            <motion.div className="relative">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full border-8 border-background shadow-xl">
                <Image
                  src="/images/bg_1.png" // Your profile image in public/images/
                  alt="Hari Singh Joshi"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-full p-4 shadow-lg">
                <div className="bg-primary/10 rounded-full p-3">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-background rounded-full p-4 shadow-lg">
                <div className="bg-primary/10 rounded-full p-3">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <Badge className="mb-4">My Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've spent years honing my skills across various technologies to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "MYSQL", icon: <Code className="h-8 w-8" />, color: "bg-blue-500/10 text-blue-500" },
              { name: "Next.js", icon: <Code className="h-8 w-8" />, color: "bg-black/10" },
              { name: "JavaScript and Python", icon: <Code className="h-8 w-8" />, color: "bg-blue-600/10 text-blue-600" },
              {
                name: "UI/UX Design",
                icon: <Palette className="h-8 w-8" />,
                color: "bg-purple-500/10 text-purple-500",
              },
              { name: "Django", icon: <Code className="h-8 w-8" />, color: "bg-green-500/10 text-green-500" },
              { name: "Tailwind CSS", icon: <Palette className="h-8 w-8" />, color: "bg-cyan-500/10 text-cyan-500" },
              {
                name: "Responsive Design",
                icon: <Laptop className="h-8 w-8" />,
                color: "bg-orange-500/10 text-orange-500",
              },
              { name: "API Integration", icon: <Code className="h-8 w-8" />, color: "bg-red-500/10 text-red-500" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <div className={`rounded-full p-4 mb-4 ${skill.color}`}>{skill.icon}</div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30 rounded-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of my recent work that showcases my skills and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Agriculture Platform AgriSaarthi",
                description:
                  "A full-featured online store with payment processing and inventory management and early plant disease detection and solution system.",
                tags: ["Material Design", "Django", "Sqlite"],
                image: "/images/agriculture.png", // Make sure this image exists
                url: "https://github.com/Hari-singh-Joshi/Plant-disease-identification.git",
              },
              {
                title: "NotesFy Notes Platform",
                description: "A modern, responsive notes website for Uttarakhand Technical University.",
                tags: ["BootStrap", "JavaScript", "Google Drive"],
                image: "/images/notesfy.png",
                url: "https://hari-singh-joshi.github.io/NotesFy/",
              },
              {
                title: "Tuition Website HarGharPathShala",
                description:
                  "A secure and user-friendly tuition application with real-time transactions, hiring tutors, and managing student data.",
                tags: ["Sqlite", "Django", "Bootstrap"],
                image: "/images/harghar.png",
                url: "https://github.com/Hari-singh-Joshi/harghar_tution_app.git",
              },
            ].map((project, index) => (
              <motion.div key={index}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all group">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Updated Button and Link usage: wrap Button inside Link for Next.js */}
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-full flex justify-center"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/project">
              <Button size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center"
          >
            <Badge className="mb-4">Let&apos;s Connect</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love
              to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View My Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
