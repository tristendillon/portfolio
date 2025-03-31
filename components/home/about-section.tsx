'use client'

import { MotionDiv, MotionSection } from '@/components/ui/motion'
import DeveloperProfile, { TechStack } from './developer-profile'
import { FaReact, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { FaGolang } from 'react-icons/fa6'
import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function AboutSection() {
  const myTechStack: TechStack[] = [
    { name: 'React', color: '#61DAFB', icon: <FaReact /> },
    { name: 'TypeScript', color: '#3178C6', icon: <SiTypescript /> },
    { name: 'Next.js', color: '#56b7d1', icon: <RiNextjsFill /> },
    { name: 'Tailwind CSS', color: '#06B6D4', icon: <SiTailwindcss /> },
    { name: 'Go', color: '#00ADD8', icon: <FaGolang /> },
    { name: 'Docker', color: '#2496ED', icon: <FaDocker /> },
  ]

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <MotionSection
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: isIntersecting ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-accent/10"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <DeveloperProfile
            name="Tristen Dillon"
            role="Developer"
            profilePicture="/images/headshot.jpg"
            bio="Detail-oriented developer with a strong passion for crafting seamless user experiences. Skilled at solving complex problems and transforming them into elegant, intuitive solutions that drive engagement and efficiency."
            stack={myTechStack}
            socialLinks={[
              { platform: 'github', url: 'https://github.com/tristendillon' },
              {
                platform: 'linkedin',
                url: 'https://linkedin.com/in/tristen-dillon-172320266/',
              },
              { platform: 'email', url: 'mailto:tristendillon24@outlook.com' },
            ]}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isIntersecting ? 1 : 0,
                y: isIntersecting ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">My Approach</h3>
              <p>
                I combine technical expertise with creative thinking to build
                applications that are not only functional but also a joy to use.
                My goal is to create digital experiences that are intuitive,
                accessible, and performant.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, hanging out with my friends, playing games,
                exploring catholicism, or at the gym.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isIntersecting ? 1 : 0,
                y: isIntersecting ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border rounded-xl p-6 shadow-sm space-y-4"
            >
              <h3 className="text-xl font-semibold">Experience Highlights</h3>

              <div className="space-y-4">
                <ExperienceItem
                  title="IT Intern"
                  company="Manhattan Fire Department"
                  period="2023 - Present"
                  description={
                    <p>
                      At my job for the Manhattan Fire Department, I supported
                      various technology projects and initiatives.
                      <br /> <br /> Developed and maintained FileMaker Pro
                      databases, including a custom email client utilizing
                      Microsoft email APIs for managing inbox and sent items.
                      <br /> <br /> Designed and implemented NextJS websites to
                      support property maintenance inspections and facilitate
                      FileMaker Pro data integration. <br /> <br /> Created an
                      internal clothing store website for the department,
                      enabling administrators to manage clothing inventory,
                      process orders, and oversee user accounts. <br /> <br />{' '}
                      Helped the migration from one incident reporting service
                      to another, including parsing legacy data, generating
                      reports, scripting for data uniformity, and coordinating
                      with the transfer team for a seamless transition.
                    </p>
                  }
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string | React.ReactNode
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const MAX_HEIGHT = 95

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.scrollHeight > MAX_HEIGHT)
    }
  }, [description])

  return (
    <div className="border-l-2 pl-4 py-1 border-primary">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">
        {company} • {period}
      </p>

      <MotionDiv
        animate={{
          height: expanded ? 'auto' : showButton ? `${MAX_HEIGHT}px` : 'auto',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`overflow-hidden relative ${
          !expanded && showButton ? 'mask-bottom' : ''
        }`}
      >
        <div ref={contentRef}>
          {typeof description === 'string' ? (
            <p className="mt-1">{description}</p>
          ) : (
            description
          )}
        </div>
      </MotionDiv>

      {showButton && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground text-sm font-medium mt-2 hover:underline focus:outline-none hover:cursor-pointer"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}
