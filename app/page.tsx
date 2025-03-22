import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from '@/components/home'
import Script from 'next/script'

export default function Home() {
  // Person schema for structured data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tristen Dillon',
    url: 'https://tristendillon.com',
    jobTitle: 'Full Stack Developer',
    description: 'Experienced full stack developer specializing in modern web applications with React, Next.js, and TypeScript.',
    knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'UI/UX Design', 'Frontend Development', 'Backend Development'],
    sameAs: [
      'https://github.com/tristendillon',
      'https://linkedin.com/in/tristendillon'
    ]
  }

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
