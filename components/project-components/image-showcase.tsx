'use client'

import Image from 'next/image'
import { MotionDiv, useScroll, useTransform } from '@/components/ui/motion'
import { useState, useRef } from 'react'
import { ImageModal } from '@/components/ui'

interface ImageShowcaseProps {
  images: string[] | string
  alt?: string
  index?: number
}

export default function ImageShowcase({
  images,
  alt = 'Project screenshot',
  index = 0,
}: ImageShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Convert single string to array for consistent handling
  const imageArray = Array.isArray(images) ? images : [images]

  // State for modal
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  // Handle image click
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setModalOpen(true)
  }

  return (
    <>
      <MotionDiv
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{ scale, opacity }}
        className="rounded-xl overflow-hidden shadow-lg h-full w-full flex items-center"
      >
        {imageArray.length === 1 ? (
          <div
            className="relative aspect-video w-full cursor-pointer"
            onClick={() => handleImageClick(imageArray[0])}
          >
            <Image
              src={imageArray[0]}
              alt={alt}
              fill
              priority
              quality={100}
              className="object-cover hover:opacity-95 transition-opacity"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full bg-card">
            {imageArray.map((image, idx) => (
              <MotionDiv
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative aspect-video cursor-pointer w-full"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`${alt} ${idx + 1}`}
                  fill
                  quality={100}
                  className="object-cover rounded-lg hover:opacity-95 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </MotionDiv>
            ))}
          </div>
        )}
      </MotionDiv>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
        alt={alt}
      />
    </>
  )
}
