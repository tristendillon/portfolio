import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from '@/components/home'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
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
