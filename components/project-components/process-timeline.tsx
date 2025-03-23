import React from 'react'

interface TimelineStep {
  title: string
  description: string
  date?: string
}

interface ProcessTimelineProps {
  title?: string
  steps: TimelineStep[]
  index?: number
}

export default function ProcessTimeline({
  title,
  steps,
}: ProcessTimelineProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {title}
        </h2>
      )}

      <div className="relative border-l border-primary/30 pl-7 space-y-10 ml-5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-lg font-medium">{step.title}</h3>
                {step.date && (
                  <span className="text-sm text-muted-foreground">
                    {step.date}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
