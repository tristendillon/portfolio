'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'

interface VideoProps {
  src: string
  title?: string
  caption?: string
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16'
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  className?: string
  index?: number
}

export default function Video({
  src,
  title,
  caption,
  aspectRatio = '16:9',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  className,
  index
}: VideoProps) {
  const [isError, setIsError] = useState(false)
  
  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]'
  }

  // Check if src is YouTube or Vimeo
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const isVimeo = src.includes('vimeo.com')
  let embedSrc = src

  // Format YouTube URL for embed
  if (isYouTube) {
    const youtubeId = src.includes('youtube.com')
      ? src.split('v=')[1]?.split('&')[0]
      : src.includes('youtu.be')
      ? src.split('youtu.be/')[1]?.split('?')[0]
      : ''
    if (youtubeId) {
      embedSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}`
    }
  }

  // Format Vimeo URL for embed
  if (isVimeo) {
    const vimeoId = src.split('vimeo.com/')[1]?.split('?')[0]
    if (vimeoId) {
      embedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}`
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn('rounded-lg overflow-hidden', className)}
    >
      <div className={cn('w-full', aspectRatioClass[aspectRatio])}>
        {isYouTube || isVimeo ? (
          <iframe
            src={embedSrc}
            title={title || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
            onError={() => setIsError(true)}
          />
        ) : (
          <video
            src={src}
            title={title}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            controls={controls}
            className="w-full h-full object-cover"
            onError={() => setIsError(true)}
          />
        )}

        {isError && (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Error loading video</p>
          </div>
        )}
      </div>

      {caption && (
        <div className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </div>
      )}
    </MotionDiv>
  )
}