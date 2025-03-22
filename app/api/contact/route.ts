import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactEmail from '@/emails/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

const toEmail = 'tristendillon24@outlook.com'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@tdilly.com>',
      to: [toEmail],
      cc: [email],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      react: ContactEmail({ name, email, subject, message }),
    })

    if (error) {
      console.error('Email sending failed:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
