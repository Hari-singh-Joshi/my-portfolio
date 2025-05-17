"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Code, Laptop, Palette, User, Mail, Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
            HJ
            </span>
          </div>
          <span className="font-bold text-xl">Portfolio</span>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">About Me</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <div>
                        <h4 className="text-sm font-medium leading-none">My Story</h4>
                        <p className="text-sm text-muted-foreground">Learn about my journey and experience</p>
                      </div>
                    </div>
                    <Link href="/about" className="block p-2 hover:bg-accent rounded-md">
                      <Button variant="ghost" className="w-full justify-start">
                        View Full Bio <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5" />
                        <div>
                          <h4 className="text-sm font-medium leading-none">Web Development</h4>
                          <p className="text-sm text-muted-foreground">Custom websites and applications</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Palette className="h-5 w-5" />
                        <div>
                          <h4 className="text-sm font-medium leading-none">UI/UX Design</h4>
                          <p className="text-sm text-muted-foreground">Beautiful, intuitive interfaces</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/services" className="block p-2 hover:bg-accent rounded-md">
                      <Button variant="ghost" className="w-full justify-start">
                        All Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="aspect-video rounded-md overflow-hidden bg-muted">
                          <Image
                            src="/images/agriculture.png"
                            alt="Project 1"
                            width={200}
                            height={120}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h4 className="text-sm font-medium">E-commerce Agriculture Platform</h4>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="aspect-video rounded-md overflow-hidden bg-muted">
                          <Image
                            src="/images/notesfy.png"
                            alt="NotesFy"
                            width={200}
                            height={120}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h4 className="text-sm font-medium">NotesFy</h4>
                      </div>
                    </div>
                    <Link href="/project" className="block p-2 hover:bg-accent rounded-md">
                      <Button variant="ghost" className="w-full justify-start">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base px-4 py-2">Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
         <Button variant="outline" size="sm">Resume</Button>
        </Link>

        <Link href="/contact">
         <Button size="sm">Hire Me</Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 py-6">
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
              <Link href="/about" className="flex items-center gap-2 text-lg font-medium">
                <User className="h-5 w-5" />
                About Me
              </Link>
              <Link href="/services" className="flex items-center gap-2 text-lg font-medium">
                <Laptop className="h-5 w-5" />
                Services
              </Link>
              <Link href="/projects" className="flex items-center gap-2 text-lg font-medium">
                <Code className="h-5 w-5" />
                Projects
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-lg font-medium">
                <Mail className="h-5 w-5" />
                Contact
              </Link>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1">
                  Resume
                </Button>
                <Button className="flex-1">Hire Me</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}