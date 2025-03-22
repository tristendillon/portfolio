'use client'

import { MotionDiv, MotionP, MotionSection, Button, SocialButton } from '@/components/ui'

export default function ContactSection() {
  return (
    <MotionSection
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 container mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

        <div className="flex flex-col items-center">
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 text-lg"
          >
            Have a project in mind or just want to chat? Feel free to reach out
            through any of the channels below.
          </MotionP>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <SocialButton.Email
              type="icon-text"
              size="lg"
              href="mailto:tristendillon24@outlook.com"
              delay={0}
              className="h-auto py-3 px-5 rounded-xl"
            />

            <SocialButton.Github
              type="icon-text"
              size="lg"
              href="https://github.com/kickedsoda"
              delay={0.1}
              className="h-auto py-3 px-5 rounded-xl"
            />

            <SocialButton.LinkedIn
              type="icon-text"
              size="lg"
              href="https://www.linkedin.com/in/tristen-dillon-172320266/"
              delay={0.2}
              className="h-auto py-3 px-5 rounded-xl"
            />
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full p-6 bg-card border rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded-md border bg-background min-h-[120px]"
                  placeholder="Your message..."
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
