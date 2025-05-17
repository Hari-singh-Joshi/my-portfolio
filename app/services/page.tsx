import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Laptop, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
export default function Services() {
  return (
    <div className="min-h-screen ">
        <Header/>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-red-900 sm:text-5xl md:text-6xl">
              Professional Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Delivering cutting-edge solutions for your business needs
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="rounded-md shadow bg-blue-600 hover:bg-blue-700">
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="ml-3 rounded-md shadow">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl">My Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              I provide top-notch services tailored to your specific needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Laptop className="h-10 w-10 text-blue-600" />}
              title="Website Development"
              description="Designing stunning static and full-stack websites using modern technologies like Django, React, and more."
            />

            <ServiceCard
              icon={<Lightbulb className="h-10 w-10 text-blue-600" />}
              title="AI Integrated Web Apps"
              description="Developing AI-powered applications using machine learning, deep learning, and TensorFlow."
            />

            <ServiceCard
              icon={<Database className="h-10 w-10 text-blue-600" />}
              title="ERP Solutions"
              description="Custom ERP systems including inventory management, automation, and business process solutions."
            />

            <ServiceCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Coaching & Training"
              description="Offering technical training and mentorship in programming, AI, and Django full-stack development, with a focus on backend."
            />

            <ServiceCard
              icon={<Code className="h-10 w-10 text-blue-600" />}
              title="Custom Web Applications"
              description="Building tailored web applications for businesses, startups, and enterprises."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-red-900">Ready to transform your business?</h2>
          <p className="mt-4 text-xl text-gray-500">Let&apos;s discuss how my services can help you achieve your goals.</p>
          <div className="mt-8">
            <Button size="lg" className="rounded-md shadow bg-blue-600 hover:bg-blue-700">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-green-900">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-500">Have questions or ready to start a project? Contact me today.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="rounded-md">
                <Link href="mailto:joshiharish942@gmail.com">joshiharish942@gmail.com</Link>
              </Button>
              <Button variant="outline" className="rounded-md">
                <Link href="tel:+91 7453966532">+91 745-3966-532</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
