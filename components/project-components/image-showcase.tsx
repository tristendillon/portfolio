"use client"

import Image from "next/image"
import { 
  MotionDiv, 
  useScroll, 
  useTransform 
} from "@/components/ui/motion"
import { useRef } from "react"

interface ImageShowcaseProps {
  images: string[] | string
  alt?: string
  index?: number
}

export default function ImageShowcase({
  images,
  alt = "Project screenshot",
  index = 0,
}: ImageShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Convert single string to array for consistent handling
  const imageArray = Array.isArray(images) ? images : [images]

  return (
    <MotionDiv
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2, 
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
      style={{ scale, opacity }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      {imageArray.length === 1 ? (
        <div className="relative aspect-video w-full">
          <Image
            src={imageArray[0]}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-card">
          {imageArray.map((image, idx) => (
            <MotionDiv
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-video"
            >
              <Image
                src={image}
                alt={`${alt} ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </MotionDiv>
          ))}
        </div>
      )}
    </MotionDiv>
  )
}