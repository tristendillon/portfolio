'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MotionDiv, AnimatePresence } from './motion'
import { X } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
}: ImageModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 w-screen h-screen"
          onClick={onClose}
        >
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-h-[90vh] max-w-[90vw] md:max-w-[80vw] overflow-hidden rounded-lg w-full h-full"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 hover:bg-black/80 p-1.5 text-white transition-colors hover:cursor-pointer"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <div className="relative min-w-[300px] min-h-[200px] w-full h-full">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                quality={100}
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
