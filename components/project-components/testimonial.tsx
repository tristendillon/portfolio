import React from 'react'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role?: string
  company?: string
  image?: string
  index?: number
}

export default function Testimonial({ 
  quote, 
  author, 
  role, 
  company, 
  image
}: TestimonialProps) {
  return (
    <div className="relative bg-card border rounded-lg p-6 shadow-sm">
      <Quote className="absolute text-primary/10 h-24 w-24 -top-6 -left-6" />
      <div className="relative">
        <p className="text-lg italic mb-4">{quote}</p>
        
        <div className="flex items-center mt-4">
          {image && (
            <div className="mr-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={image} 
                alt={author}
                className="h-12 w-12 rounded-full object-cover" 
              />
            </div>
          )}
          
          <div>
            <p className="font-medium">{author}</p>
            {(role || company) && (
              <p className="text-sm text-muted-foreground">
                {role}{role && company && ', '}{company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}