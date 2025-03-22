import React from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  index?: number
}

export default function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      {title && (
        <div className="border-b px-4 py-2 bg-muted flex items-center">
          <span className="text-sm font-medium">{title}</span>
          <span className="ml-2 text-xs text-muted-foreground">{language}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}