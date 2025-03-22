'use client'

import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { Button, type ButtonProps } from './button'
import { MotionDiv } from './motion'
import React from 'react'

// Social platforms supported by the component
export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'email'
  | 'website'

// Base URLs for different platforms
const BASE_URLS: Record<SocialPlatform, string> = {
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  twitter: 'https://twitter.com/',
  email: 'mailto:',
  website: '', // Custom websites don't have a base URL
}

// Default labels for each platform
const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  email: 'Email',
  website: 'Website',
}

// Get the appropriate icon for each platform
const getSocialIcon = (platform: SocialPlatform, size?: number) => {
  const iconProps = {
    width: size || 18,
    height: size || 18,
  }

  switch (platform) {
    case 'github':
      return <Github {...iconProps} />
    case 'linkedin':
      return <Linkedin {...iconProps} />
    case 'twitter':
      return <Twitter {...iconProps} />
    case 'email':
      return <Mail {...iconProps} />
    case 'website':
      return <ExternalLink {...iconProps} />
  }
}

// Props for individual social buttons
export interface SocialButtonProps {
  platform: SocialPlatform
  type?: 'icon' | 'text' | 'icon-text'
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  username?: string // Used to construct the full URL for platforms that need it
  label?: string // Custom label, defaults to platform name
  delay?: number // For animation delay
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const SocialButton = ({
  platform,
  type = 'icon-text',
  variant = 'outline',
  size = 'md',
  href,
  username,
  label,
  delay = 0,
  className = '',
  onClick,
}: SocialButtonProps) => {
  let url = href || ''

  if (!href && username && platform !== 'website') {
    url = `${BASE_URLS[platform]}${username}`
  }

  if (platform === 'email' && !href && username) {
    url = `mailto:${username}`
  }

  const displayLabel = label || PLATFORM_LABELS[platform]

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18

  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'
  const iconOnly = type === 'icon'

  const buttonProps: ButtonProps = iconOnly
    ? {
        size: 'icon',
        className: `${
          size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-10 w-10' : 'h-9 w-9'
        } ${className}`,
      }
    : {
        size: buttonSize,
        className: `${type === 'icon-text' ? 'gap-2' : ''} ${className}`,
      }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="inline-block"
    >
      <Button variant={variant} asChild {...buttonProps} onClick={onClick}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {(type === 'icon' || type === 'icon-text') &&
            getSocialIcon(platform, iconSize)}
          {type !== 'icon' && <span>{displayLabel}</span>}
        </a>
      </Button>
    </MotionDiv>
  )
}

// Namespaced exports for each platform
SocialButton.Github = Object.assign(
  (props: Omit<SocialButtonProps, 'platform'>) => (
    <SocialButton platform="github" {...props} />
  ),
  { displayName: 'SocialButton.Github' }
)

SocialButton.LinkedIn = Object.assign(
  (props: Omit<SocialButtonProps, 'platform'>) => (
    <SocialButton platform="linkedin" {...props} />
  ),
  { displayName: 'SocialButton.LinkedIn' }
)

SocialButton.Twitter = Object.assign(
  (props: Omit<SocialButtonProps, 'platform'>) => (
    <SocialButton platform="twitter" {...props} />
  ),
  { displayName: 'SocialButton.Twitter' }
)

SocialButton.Email = Object.assign(
  (props: Omit<SocialButtonProps, 'platform'>) => (
    <SocialButton platform="email" {...props} />
  ),
  { displayName: 'SocialButton.Email' }
)

SocialButton.Website = Object.assign(
  (props: Omit<SocialButtonProps, 'platform'>) => (
    <SocialButton platform="website" {...props} />
  ),
  { displayName: 'SocialButton.Website' }
)
// Default export for the component
export default SocialButton
