import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Hari Singh Joshi | Full-Stack Developer Portfolio',
  description: 'Hari Singh Joshi is a final-year Computer Science student at Tulas Institute, Dehradun, specializing in backend and full-stack web development using Python, Django, JavaScript, and more.',
  keywords: [
    'Hari Singh Joshi',
    'Full-Stack Developer',
    'Backend Developer',
    'Python Developer',
    'Django',
    'JavaScript',
    'Tula Institute',
    'GDSC',
    'NotesFy',
    'AI Projects',
    'Portfolio',
    'Hackathon Winner'
  ],
  authors: [{ name: 'Hari Singh Joshi', url: 'https://my-portfolio-i81d.vercel.app/' }],
  openGraph: {
    title: 'Hari Singh Joshi | Software Developer Portfolio',
    description: 'Explore projects by Hari Singh Joshi, a final-year B.Tech student at Tulas Institute with expertise in full-stack development and AI.',
    url: 'https://my-portfolio-i81d.vercel.app/',
    siteName: 'Hari Singh Joshi Portfolio',
    images: [
      {
        url: 'https://my-portfolio-i81d.vercel.app//og-image.jpg', // replace with your image
        width: 1200,
        height: 630,
        alt: 'Hari Singh Joshi Portfolio Preview',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://my-portfolio-i81d.vercel.app/'),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
