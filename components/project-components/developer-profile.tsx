"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { MotionDiv } from "@/components/ui/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email"
  url: string
}

interface DeveloperProfileProps {
  name: string
  bio: string
  profilePicture: string
  role?: string
  socialLinks?: SocialLink[]
  index?: number
}

const getSocialIcon = (platform: SocialLink["platform"]) => {
  switch (platform) {
    case "github":
      return <Github className="h-4 w-4" />
    case "linkedin":
      return <Linkedin className="h-4 w-4" />
    case "twitter":
      return <Twitter className="h-4 w-4" />
    case "email":
      return <Mail className="h-4 w-4" />
  }
}

export default function DeveloperProfile({
  name,
  bio,
  profilePicture,
  role = "Developer",
  socialLinks = [],
  index = 0,
}: DeveloperProfileProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-20 h-20 rounded-full overflow-hidden"
            >
              <Image
                src={profilePicture}
                alt={name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </MotionDiv>
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
              <p className="text-sm">{bio}</p>
              
              {socialLinks.length > 0 && (
                <div className="flex gap-2 justify-center sm:justify-start mt-3">
                  {socialLinks.map((link, idx) => (
                    <MotionDiv
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full"
                        asChild
                      >
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`${name}'s ${link.platform}`}
                        >
                          {getSocialIcon(link.platform)}
                        </a>
                      </Button>
                    </MotionDiv>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}