import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  FileCheck,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Code2,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Import local images
import profileImage from "@/public/images/hari.png"
import tulasImage from "@/public/images/tulas.jpg"
import lbaImage from "@/public/images/lba.png"
import vizvaImage from "@/public/images/vizva.png"
import nptelImage from "@/public/images/nptel.png"
import nptelDImage from "@/public/images/nptelD.png"
import hackerrankImage from "@/public/images/hackerrank.png"
import ccImage from "@/public/images/cc.jpg"
import studentImage from "@/public/images/student.png"
import hackathonImage from "@/public/images/two.jpg"
import patentImage from "@/public/images/one.jpg"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={profileImage}
                alt="Hari Singh Joshi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hari Singh Joshi</h1>
            <p className="text-xl mb-6 text-white/90">Full Stack Django Developer with NextJs</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:Joshiharisingh84@gmail.com"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="tel:+917453966532"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a
                href="https://your-portfolio-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Globe size={18} />
                <span>Portfolio</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hari-singh-joshi-4499b326b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Hari-singh-Joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/joshi16/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-white"
              >
                <Code2 size={18} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden md:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden md:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code size={16} />
              <span className="hidden md:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code2 size={16} />
              <span className="hidden md:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <FileCheck size={16} />
              <span className="hidden md:inline">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award size={16} />
              <span className="hidden md:inline">Achievements</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail size={16} />
              <span className="hidden md:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-purple-600" />
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-600">Tulas Institute, Dehradun</p>
                  <p className="mt-2">Aggregate Percentage: 82%</p>
                  <p className="text-gray-500">Graduating in 2025</p>
                  <div className="mt-4">
                    <Image
                      src={tulasImage}
                      alt="Tulas Institute"
                      width={400}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Class XII</h3>
                  <p className="text-gray-600">Little Buddha Academy</p>
                  <p className="mt-2">National Examination Board: 85%</p>
                  <p className="text-gray-500">Completed in 2021</p>
                  <div className="mt-4">
                    <Image
                      src={lbaImage}
                      alt="Little Buddha Academy"
                      width={400}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-purple-600" />
              Experience
            </h2>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <Badge className="bg-purple-600">08/05/2025-Present</Badge>
                </div>
                <p className="text-gray-600">Vizva Consultancy Services</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Technical Support</li>
                  <li>Dealing with Daily Assessment</li>
                  <li>Mock Interview Session and Project Development</li>
                </ul>
                <div className="mt-6">
                  <Image
                    src={vizvaImage}
                    alt="Vizva Full-Time Software Developer"
                    width={500}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-purple-600" />
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Online Shopping Website</h3>
                    <Badge className="bg-purple-600">08-2024/09-2024</Badge>
                  </div>
                  <p className="text-gray-500 italic">HTML, CSS, DJANGO, SQLITE, JAVASCRIPT</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>
                      Developed a full-stack e-commerce platform using Django for the backend and SQLite for database
                      management
                    </li>
                    <li>
                      Engineered the frontend using HTML, CSS, JavaScript, and Bootstrap for responsive UI design
                    </li>
                    <li>
                      Designed and implemented backend logic, including user authentication and product catalog
                      management
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">Time Table Management ERP</h3>
                    <Badge className="bg-purple-600">11-2024/12-2024</Badge>
                  </div>
                  <p className="text-gray-500 italic">HTML, CSS, Python, SQLite, Django, Jazzmin</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>
                      Created an internal ERP tool to manage class schedules for the CSE department, focusing 90% on
                      backend architecture and schema design
                    </li>
                    <li>
                      Utilized Django framework and Jazzmin for an enhanced admin interface, enabling faculty to
                      dynamically update and manage timetables
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">E-Commerce and AI Crop Disease Identification System</h3>
                    <Badge className="bg-purple-600">2024</Badge>
                  </div>
                  <p className="text-gray-500 italic">CNN, Django, HTML, CSS, JavaScript</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>
                      Collaboratively built a dual-purpose platform that detects early-stage crop diseases using a CNN
                      model and suggests remedies
                    </li>
                    <li>Integrated a marketplace feature allowing farmers to sell their produce directly online</li>
                    <li>
                      Led backend development, handled relational database design, data acquisition, and machine
                      learning model training
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">NotesFy</h3>
                    <Badge className="bg-purple-600">02-2025/04-2025</Badge>
                  </div>
                  <p className="text-gray-500 italic">HTML, CSS, Bootstrap, Google Drive, JavaScript</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>
                      Designed and developed a digital repository providing quality academic resources tailored for
                      BTech CSE students
                    </li>
                    <li>
                      Integrated handwritten notes, project materials, and study guides through seamless Google Drive
                      integration
                    </li>
                    <li>
                      Prioritized user experience and academic relevance, delivering structured and exam-focused
                      content
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-purple-600" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">Python</Badge>
                  <Badge className="bg-purple-600">C++ (DSA, OOPS)</Badge>
                  <Badge className="bg-purple-600">JavaScript</Badge>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">Pandas</Badge>
                  <Badge className="bg-purple-600">Numpy</Badge>
                  <Badge className="bg-purple-600">MatplotLib</Badge>
                  <Badge className="bg-purple-600">CNN</Badge>
                  <Badge className="bg-purple-600">NextJs</Badge>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">MySQL</Badge>
                  <Badge className="bg-purple-600">Django</Badge>
                  <Badge className="bg-purple-600">DRF</Badge>
                  <Badge className="bg-purple-600">Bootstrap</Badge>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">HTML</Badge>
                  <Badge className="bg-purple-600">CSS</Badge>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">Problem-solving</Badge>
                  <Badge className="bg-purple-600">Leadership</Badge>
                  <Badge className="bg-purple-600">Collaboration</Badge>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FileCheck className="text-purple-600" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">NPTEL Elite Certificate</h3>
                <p className="text-gray-600">Python for DSA (8 weeks course)</p>
                <p className="text-gray-500">Certificate ID: NPTEL24CS78S333800105</p>
                <div className="mt-4">
                  <Image
                    src={nptelImage}
                    alt="NPTEL Python Certificate"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">NPTEL Certificate</h3>
                <p className="text-gray-600">DBMS (8 weeks course)</p>
                <div className="mt-4">
                  <Image
                    src={nptelDImage}
                    alt="NPTEL DBMS Certificate"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">HackerRank Certification</h3>
                <p className="text-gray-600">Python Basics</p>
                <p className="text-gray-500">Certificate ID: D12413F91F7B</p>
                <div className="mt-4">
                  <Image
                    src={hackerrankImage}
                    alt="HackerRank Python Certificate"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">C sharp Certification</h3>
                <p className="text-gray-600">Microsoft</p>
                <div className="mt-4">
                  <Image
                    src={ccImage}
                    alt="C# Certificate"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-purple-600" />
              Rewards & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">Student of the Year 2025</h3>
                <p className="text-gray-600">Proud Moment to be Student of the Year among 2580+ students</p>
                <div className="mt-4">
                  <Image
                    src={studentImage}
                    alt="Student of the Year Award"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">National Level Hackathon Winner</h3>
                <p className="text-gray-600">National Level Hackathon Winner in Dev Bhoomi Uttrakhand University</p>
                <div className="mt-4">
                  <Image
                    src={hackathonImage}
                    alt="Hackathon Winner"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold">Rise of Ventures</h3>
                <p className="text-gray-600">Research and Patent Winner Graphic era Deemed to be University Graphest</p>
                <div className="mt-4">
                  <Image
                    src={patentImage}
                    alt="Rise of Ventures"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Mail className="text-purple-600" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">+91 7453966532</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">Joshiharisingh84@gmail.com</p>
                  </div>
                </div>
              </Card>kk
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/hari-singh-joshi-4499b326b/" className="text-purple-600 hover:underline">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Github className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">GitHub</h3>
                    <a href="https://github.com/Hari-singh-Joshi" className="text-purple-600 hover:underline">
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Portfolio</h3>
                    <a href="https://your-portfolio-site.com" className="text-purple-600 hover:underline">
                      Visit Portfolio
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Code2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LeetCode</h3>
                    <a href="https://leetcode.com/u/joshi16/" className="text-purple-600 hover:underline">
                      View LeetCode Profile
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
