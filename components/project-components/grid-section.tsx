import React from 'react'
import { GridItem } from '@/lib/types'
import projectComponents from '@/lib/project-components'
import { ComponentPropsMap } from '@/lib/types'
interface GridSectionProps {
  title?: string
  description?: string
  items: GridItem[]
  index?: number
}

export default function GridSection({
  title,
  description,
  items,
  index,
}: GridSectionProps) {
  return (
    <div className="space-y-6">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const SpecificComponent = projectComponents[
            item.component.component
          ] as React.ComponentType<
            ComponentPropsMap[typeof item.component.component]
          >

          const noBackground = item.inCard !== undefined && !item.inCard
          const padding = item.padding !== undefined ? item.padding * 4 : 24
          return (
            <div
              key={idx}
              className={`
                rounded-lg shadow-sm
                ${item.width === 2 ? 'md:col-span-2' : ''}
                ${item.width === 3 ? 'md:col-span-3' : ''}
                ${
                  noBackground
                    ? '!bg-background !border-none'
                    : 'bg-card border'
                }
              `}
              style={{ padding }}
            >
              <SpecificComponent
                {...item.component.props}
                index={index ? index + idx : idx}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
