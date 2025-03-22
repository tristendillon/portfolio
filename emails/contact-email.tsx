import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{
        backgroundColor: '#f6f9fc',
        fontFamily: 'Arial, sans-serif',
      }}>
        <Container style={{
          backgroundColor: '#ffffff',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '600px',
        }}>
          <Heading style={{
            color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '30px 0',
            padding: '0',
          }}>
            New Contact Form Submission
          </Heading>
          <Section>
            <Text style={{ fontSize: '16px', color: '#333' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: '16px', color: '#333' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: '16px', color: '#333' }}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={{ fontSize: '16px', color: '#333' }}>
              <strong>Message:</strong>
            </Text>
            <Text style={{
              fontSize: '16px',
              color: '#333',
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
