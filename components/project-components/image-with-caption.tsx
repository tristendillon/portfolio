'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MotionDiv } from '@/components/ui'
import { ImageModal } from '@/components/ui'

interface ImageWithCaptionProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  className?: string
  zoomable?: boolean
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | 'auto'
  index?: number
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  width,
  height,
  className,
  zoomable = true,
  aspectRatio = 'auto',
  index,
}: ImageWithCaptionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]',
    auto: '',
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={cn('overflow-hidden rounded-lg', className)}
    >
      <div
        className={cn(
          'relative overflow-hidden w-full',
          aspectRatioClass[aspectRatio],
          zoomable && 'cursor-zoom-in'
        )}
        onClick={() => zoomable && setIsModalOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          className="object-cover w-full h-full"
        />
      </div>

      {caption && (
        <div className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </div>
      )}

      {zoomable && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={src}
          alt={alt}
        />
      )}
    </MotionDiv>
  )
}
