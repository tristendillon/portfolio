'use client'

import { MotionDiv, MotionSection } from '@/components/ui/motion'
import { Card } from '@/components/ui/card'
import { FaReact, FaDocker, FaGit } from 'react-icons/fa'
import { SiJest, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaGolang } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
import React from 'react'
import { cn } from '@/lib/utils'
interface SkillProps {
  title: string
  description: string
  delay?: number
}

function Skill({ title, description, delay = 0 }: SkillProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </MotionDiv>
  )
}

interface TechnologyProps {
  name: string
  icon: React.ReactNode
  delay?: number
  wrapperClassName?: string
}

function Technology({
  name,
  icon,
  delay = 0,
  wrapperClassName,
}: TechnologyProps) {
  const iconElement = icon as React.ReactElement<React.SVGProps<SVGSVGElement>>
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className={cn(
          'h-16 w-16 flex items-center justify-center bg-card border rounded-full p-3 shadow-sm',
          wrapperClassName
        )}
      >
        {React.cloneElement(iconElement, {
          className: cn(
            'text-foreground h-16 w-16',
            iconElement.props.className
          ),
        })}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </MotionDiv>
  )
}

export default function SkillsSection() {
  const technologies = [
    { name: 'React', icon: <FaReact fill="#61DAFB" /> },
    {
      name: 'Next.js',
      icon: <RiNextjsFill fill="#000000" />,
      wrapperClassName: 'dark:bg-white/20 rounded-full',
    },
    { name: 'TypeScript', icon: <SiTypescript fill="#007ACC" /> },
    { name: 'Go', icon: <FaGolang fill="#00ADD8" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss fill="#38BDF8" /> },
    { name: 'Docker', icon: <FaDocker fill="#2496ED" /> },
    { name: 'Jest', icon: <SiJest fill="#C21325" /> },
    { name: 'Git', icon: <FaGit fill="#F05032" /> },
  ]

  return (
    <MotionSection
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Skill
                title="Communication"
                description="Excellent verbal and written communication skills, with experience presenting complex technical concepts to diverse audiences."
                delay={0}
              />
              <Skill
                title="Problem Solving"
                description="Strong analytical thinking and creative approach to resolving technical challenges efficiently."
                delay={0.1}
              />
              <Skill
                title="Team Collaboration"
                description="Proven ability to work effectively in agile team and coordinate with cross-functional teams."
                delay={0.2}
              />
              <Skill
                title="Project Management"
                description="Experience in planning, coordinating, and executing software development projects from concept to delivery."
                delay={0.3}
              />
              <Skill
                title="UI/UX Design"
                description="Strong understanding of user-centered design principles and accessibility best practices."
                delay={0.4}
              />
              <Skill
                title="Continuous Learning"
                description="Passionate about staying updated with the latest technologies and industry best practices."
                delay={0.5}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Technologies
            </h3>
            <Card className="p-8 border shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
                {technologies.map((tech, index) => (
                  <Technology
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    wrapperClassName={tech.wrapperClassName}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
