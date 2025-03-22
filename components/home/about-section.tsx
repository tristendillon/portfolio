'use client'

import { MotionDiv, MotionSection } from '@/components/ui/motion'
import DeveloperProfile, { TechStack } from './developer-profile'
import { FaReact, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { FaGolang } from 'react-icons/fa6'

export default function AboutSection() {
  const myTechStack: TechStack[] = [
    { name: 'React', color: '#61DAFB', icon: <FaReact /> },
    { name: 'TypeScript', color: '#3178C6', icon: <SiTypescript /> },
    { name: 'Next.js', color: '#000000', icon: <RiNextjsFill /> },
    { name: 'Tailwind CSS', color: '#06B6D4', icon: <SiTailwindcss /> },
    { name: 'Go', color: '#00ADD8', icon: <FaGolang /> },
    { name: 'Docker', color: '#2496ED', icon: <FaDocker /> },
  ]

  return (
    <MotionSection
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-accent/10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="space-y-12">
          <DeveloperProfile
            name="Tristen Dillon"
            role="Developer"
            profilePicture="/vercel.svg" // Replace with your actual profile picture
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                technologies, contributing to open-source projects, or enjoying
                outdoor activities to maintain a healthy work-life balance.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border rounded-xl p-6 shadow-sm space-y-4"
            >
              <h3 className="text-xl font-semibold">Experience Highlights</h3>

              <div className="space-y-4">
                <div className="border-l-2 pl-4 py-1 border-primary">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    TechCorp Inc. • 2021 - Present
                  </p>
                  <p className="mt-1">
                    Leading UI/UX initiatives and mentoring junior developers
                  </p>
                </div>

                <div className="border-l-2 pl-4 py-1 border-primary">
                  <h4 className="font-medium">Full Stack Engineer</h4>
                  <p className="text-sm text-muted-foreground">
                    WebSolutions • 2018 - 2021
                  </p>
                  <p className="mt-1">
                    Developed scalable web applications with modern frameworks
                  </p>
                </div>

                <div className="border-l-2 pl-4 py-1 border-primary">
                  <h4 className="font-medium">Junior Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    Digital Agency • 2016 - 2018
                  </p>
                  <p className="mt-1">
                    Created responsive websites and e-commerce solutions
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
