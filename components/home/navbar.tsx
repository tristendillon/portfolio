'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolling, setIsScrolling] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = document.querySelectorAll('section[id]')

        // Find the section that is most in view
        let current = ''
        let maxVisiblePercentage = 0

        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top
          const sectionHeight = section.getBoundingClientRect().height
          const viewportHeight = window.innerHeight

          // Calculate how much of the section is visible
          const visibleHeight =
            Math.min(viewportHeight, sectionTop + sectionHeight) -
            Math.max(0, sectionTop)
          const visiblePercentage = (visibleHeight / sectionHeight) * 100

          if (
            visiblePercentage > maxVisiblePercentage &&
            visiblePercentage > 0
          ) {
            maxVisiblePercentage = visiblePercentage
            current = section.getAttribute('id') || ''
          }
        })

        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  // Handle smooth scrolling when clicking nav items
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      setIsScrolling(true)
      targetElement.scrollIntoView({ behavior: 'smooth' })

      window.history.pushState(null, '', href)

      setTimeout(() => {
        setActiveSection(targetId)
        setIsScrolling(false)
      }, 500)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">TD</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                'text-sm transition-colors hover:text-foreground font-medium',
                activeSection === item.href.substring(1)
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t p-4 bg-background animate-in slide-in-from-top-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  'flex items-center gap-2 p-2 rounded-md',
                  activeSection === item.href.substring(1)
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
