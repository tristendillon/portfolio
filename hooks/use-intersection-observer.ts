'use client'

import { useEffect, useState, useRef } from 'react'

export function useIntersectionObserver(
  options = { threshold: 0.1, triggerOnce: true }
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only update state if we haven't animated yet or if triggerOnce is false
      if (!hasAnimated || !options.triggerOnce) {
        setIsIntersecting(entry.isIntersecting)

        // If intersecting and triggerOnce is true, mark as animated
        if (entry.isIntersecting && options.triggerOnce) {
          setHasAnimated(true)
        }
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.triggerOnce, hasAnimated])

  return { ref, isIntersecting }
}
