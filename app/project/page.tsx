"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Corrected image paths
const projects = {
  websites: [
    {
      title: "E-Commerce Website",
      description: "Full-stack e-commerce site built with Django, SQLite, and Bootstrap.",
      image: "/images/proj_2.png",
      date: "2023",
      url:"https://github.com/Hari-singh-Joshi/E-Commerce_Django_project.git ",
    },
    {
      title: "Notesfy",
      description: "Provides notes, lab files, old question papers, and mentoring for UTU students. Built with HTML, CSS, JavaScript.",
      image: "/images/notesfy.png",
      date: "2023",
      url:"https://hari-singh-joshi.github.io/NotesFy/",
    },
    {
      title: "Hargharpathshala",
      description: "Tutoring platform built using HTML, CSS, JS, Django, PostgreSQL, and Jazzmin.",
      image: "/images/harghar.png",
      date: "2024",
      url:"https://github.com/Hari-singh-Joshi/harghar_tution_app.git",
    },
    {
      title: "Ticketless Entry System",
      description: "MERN stack-based ticketless entry system for events or monuments, offering seamless entry and management.",
      image: "/images/ticket.png",
      date: "2024",
      url:"https://github.com/Hari-singh-Joshi/HACKATHON-III.git",
    },
    {
      title: "Weather Application",
      description: "Weather forecasting app using HTML, CSS, and JavaScript, providing real-time weather data.",
      image: "/images/weather.png",
      date: "2022",
      url:"https://github.com/Hari-singh-Joshi/weather-app.git",
    },
    {
      title: "Time Table System",
      description: "Django-based timetable system for the CSE Department.",
      image: "/images/proj_3.jpg",
      date: "2023",
      url:"https://github.com/Hari-singh-Joshi/timetable.git",
    },
  ],
  software: [
   
    {
      title: "Tic-Toc-Toe Game",
      description: "Interactive Tic-Toc-Toe game built with HTML, CSS, and JavaScript.",
      image: "/images/tic.png",
      date: "2022",
      url:"https://hari-singh-joshi.github.io/tictocgame/",
    },
    {
      title: "Snake Game",
      description: "Classic Snake game built with HTML, CSS, and JavaScript, with score tracking.",
      image: "/images/snake.png",
      date: "2022",
      url:"https://hari-singh-joshi.github.io/snakeGame/",
    },
  ],
  ai: [
    {
      title: "Early Crop Disease Detection",
      description: "AI model to classify crop diseases and suggest solutions, developed during a national hackathon.",
      image: "/images/proj_1.png",
      date: "2023",
      url:"https://github.com/Hari-singh-Joshi/Plant-disease-identification.git",
    },
    {
      title: "Tomato Disease Identification",
      description: "Deep learning project using CNN and TensorFlow to classify tomato plant diseases; includes Django web app.",
      image: "/images/tomato.png",
      date: "2024",
      url:"#",
    },
    {
      title: "Skin Disease Identification",
      description: "CNN-based system to detect various skin diseases from images; Django-powered interface.",
      image: "/images/skin.png",
      date: "2025",
      url:"https://github.com/Hari-singh-Joshi/skin_cure-Minor_Project-.git",
    },
    {
      title: "Attendance System using OpenCV",
      description: "Facial recognition-based attendance system using OpenCV for real-time tracking.",
      image: "/images/att.png",
      date: "2025",
      url:"#",
    },
  ],
}

export default function Project() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <main className="container mx-auto py-12 px-4">
      <Header />
      <br/>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of projects across web development, software engineering, and artificial intelligence.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="ai">AI Projects</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <ProjectSection title="Web Development Projects" projects={projects.websites} visible={true} />
          <ProjectSection title="Software Engineering Projects" projects={projects.software} visible={true} />
          <ProjectSection title="AI & Machine Learning Projects" projects={projects.ai} visible={true} />
        </TabsContent>

        <TabsContent value="websites">
          <ProjectSection title="Web Development Projects" projects={projects.websites} visible={true} />
        </TabsContent>

        <TabsContent value="software">
          <ProjectSection title="Software Engineering Projects" projects={projects.software} visible={true} />
        </TabsContent>

        <TabsContent value="ai">
          <ProjectSection title="AI & Machine Learning Projects" projects={projects.ai} visible={true} />
        </TabsContent>
      </Tabs>

      <Footer />
    </main>
  )
}

interface ProjectSectionProps {
  title: string
  projects: {
    title: string
    description: string
    image: string
    date: string
  }[]
  visible: boolean
}

function ProjectSection({ title, projects, visible }: ProjectSectionProps) {
  if (!visible) return null

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    date: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/images/placeholder.png"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge variant="outline">{project.date}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
      {project.url && (
  <a
    href={project.url}
    className="text-sm font-medium text-primary hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Details
  </a>
)}
      </CardFooter>
    </Card>
  )
}
