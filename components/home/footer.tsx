import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            asChild
          >
            <a href="/Resume.pdf" download>
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tristen Dillon. All rights reserved.</p>
          <p className="mt-1">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}