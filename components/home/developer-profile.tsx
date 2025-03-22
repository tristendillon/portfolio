'use client'

import Image from 'next/image'
import {
  MotionDiv,
  Card,
  CardContent,
  SocialButton,
  SocialPlatform,
} from '@/components/ui'

interface SocialLink {
  platform: SocialPlatform
  url: string
}

export interface TechStack {
  name: string
  icon?: React.ReactNode
  color?: string
}

interface DeveloperProfileProps {
  name: string
  bio: string
  profilePicture: string
  role?: string
  socialLinks?: SocialLink[]
  stack?: TechStack[]
  index?: number
}

export default function DeveloperProfile({
  name,
  bio,
  profilePicture,
  role = 'Developer',
  socialLinks = [],
  stack = [],
  index = 0,
}: DeveloperProfileProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-28 h-28 rounded-full overflow-hidden"
              >
                <Image
                  src={profilePicture}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="112px"
                  quality={100}
                  priority
                />
              </MotionDiv>

              {socialLinks.length > 0 && (
                <div className="flex gap-2 justify-center">
                  {socialLinks.map((link, idx) => (
                    <SocialButton
                      key={idx}
                      platform={link.platform}
                      type="icon"
                      size="sm"
                      href={link.url}
                      variant="outline"
                      className="h-8 w-8 rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col h-full text-center md:text-left justify-between gap-4 flex-grow">
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
              <p className="text-sm">{bio}</p>

              {stack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {stack.map((tech, idx) => (
                    <MotionDiv
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 bg-card border rounded-full px-3 py-1 text-xs"
                      style={{ borderColor: tech.color }}
                    >
                      {tech.icon && (
                        <span className="text-lg">{tech.icon}</span>
                      )}
                      {tech.name}
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
