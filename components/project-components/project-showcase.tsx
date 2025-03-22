"use client"

import { ExternalLink } from "lucide-react"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/ui/motion"

interface ProjectShowcaseProps {
  title: string
  description: string
  technologies: string[]
  link?: string
  index?: number
}

export default function ProjectShowcase({
  title,
  description,
  technologies,
  link,
  index = 0,
}: ProjectShowcaseProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <MotionDiv
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </MotionDiv>
            ))}
          </div>
        </CardContent>
        {link && (
          <CardFooter>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group" 
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  View Project
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </MotionDiv>
  )
}