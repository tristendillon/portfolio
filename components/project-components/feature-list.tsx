"use client"

import { CheckCircle } from "lucide-react"
import { MotionDiv } from "@/components/ui/motion"

interface Feature {
  title: string
  description?: string
}

interface FeatureListProps {
  features: (Feature | string)[]
  title?: string
  index?: number
}

export default function FeatureList({ 
  features, 
  title = "Features", 
  index = 0
}: FeatureListProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96] 
      }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-y-3">
        {features.map((feature, idx) => {
          const isFeatureObject = typeof feature !== 'string';
          const featureTitle = isFeatureObject ? feature.title : feature;
          const featureDescription = isFeatureObject ? feature.description : undefined;
          
          return (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1 + 0.2,
              }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-medium">{featureTitle}</p>
                {featureDescription && (
                  <p className="text-sm text-muted-foreground mt-1">{featureDescription}</p>
                )}
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </MotionDiv>
  )
}