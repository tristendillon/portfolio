'use client'

import { useRef, useState, useEffect } from 'react'
import { MotionDiv, useScroll, useTransform } from '@/components/ui/motion'

interface Stat {
  label: string
  value: number
  prefix?: string
  suffix?: string
  unit?: string
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: Stat[]
  columns?: 2 | 3 | 4
  index?: number
}

export default function StatsSection({
  title = 'Project Stats',
  description,
  stats,
  columns = 3,
  index = 0,
}: StatsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0])

  return (
    <MotionDiv ref={containerRef} style={{ opacity, y }} className="py-16">
      <div className="container">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              stat={stat}
              delay={index * 0.1 + idx * 0.1}
              unit={stat.unit}
            />
          ))}
        </div>
      </div>
    </MotionDiv>
  )
}

function AnimatedStat({
  stat,
  delay,
  unit,
}: {
  stat: Stat
  delay: number
  unit?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const statRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = statRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = stat.value
    const duration = 2000 // ms
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Use easeOutExpo for a nice deceleration effect
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)

      start = Math.min(Math.floor(end * easeOutExpo), end)
      setCount(start)

      if (progress >= 1) {
        setCount(end) // Ensure we always reach the exact final value
        clearInterval(timer)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <MotionDiv
      ref={statRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="flex flex-col items-center justify-center bg-card border rounded-xl p-6 shadow-sm"
    >
      <div className="text-4xl font-bold mb-2 flex items-baseline">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span className="tabular-nums">{count.toLocaleString()}</span>
        {stat.suffix && (
          <span className="ml-1 text-muted-foreground text-xl">
            {stat.suffix}
          </span>
        )}
        {unit && (
          <span className="ml-1 text-muted-foreground text-xl">{unit}</span>
        )}
      </div>
      <p className="text-muted-foreground text-center">{stat.label}</p>
    </MotionDiv>
  )
}
