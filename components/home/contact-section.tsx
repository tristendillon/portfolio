'use client'

import { useState } from 'react'
import {
  MotionDiv,
  MotionP,
  MotionSection,
  Button,
  SocialButton,
} from '@/components/ui'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill out all fields',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address',
      })
      return
    }

    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: '',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully!',
      })

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Contact form error:', error)
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          error instanceof Error ? error.message : 'Failed to send message',
      })
    }
  }

  return (
    <MotionSection
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: isIntersecting ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 container mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

        <div className="flex flex-col items-center">
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isIntersecting ? 1 : 0,
              y: isIntersecting ? 0 : 20,
            }}
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
            animate={{
              opacity: isIntersecting ? 1 : 0,
              y: isIntersecting ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full p-6 bg-card border rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>

            {formStatus.success ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center space-x-3 mb-4">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-300">
                  {formStatus.message}
                </p>
              </div>
            ) : null}

            {formStatus.error ? (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center space-x-3 mb-4">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-300">
                  {formStatus.message}
                </p>
              </div>
            ) : null}

            <form className="space-y-4" onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
