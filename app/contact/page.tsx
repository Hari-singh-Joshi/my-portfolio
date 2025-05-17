import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Github, Code, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
export default function Contact() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-24 w-24 rounded-full bg-white p-1 shadow-xl mb-6">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                HSJ
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hari Singh Joshi</h1>
            <p className="text-xl text-white/80 max-w-2xl">Connect with me through any of the channels below</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Personal Info Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Contact Details</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Dehradun, Uttrakhand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Phone</h3>
                  <a
                    href="tel:+917453966532"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    +91 7453966532
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Email</h3>
                  <a
                    href="mailto:joshiharish942@gmail.com"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  >
                    joshiharish942@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Social Profiles</h2>

            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/hari-singh-joshi-4499b326b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400 truncate">hari-singh-joshi-4499b326b</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="https://github.com/Hari-singh-Joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400 truncate">Hari-singh-Joshi</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
              </a>

              <a
                href="https://leetcode.com/u/joshi16/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors group"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                  <Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">LeetCode</h3>
                  <p className="text-gray-600 dark:text-gray-400 truncate">joshi16</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="mailto:joshiharish942@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Get In Touch
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Hari Singh Joshi. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
