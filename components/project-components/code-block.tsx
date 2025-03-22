'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useTheme } from 'next-themes'
import { FiFile, FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface CodeBlockProps {
  filePath: string
  language?: string
  title?: string
  index?: number
  maxHeight?: number
  initiallyExpanded?: boolean
}

export default function CodeBlock({
  filePath,
  language,
  title,
  index,
  maxHeight = 300,
  initiallyExpanded = false,
}: CodeBlockProps) {
  const [code, setCode] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded)
  const [shouldTruncate, setShouldTruncate] = useState<boolean>(false)
  const codeContainerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  // Extract filename from path if no title provided
  const fileName = title || filePath.split('/').pop() || 'code'
  // Extract language from file extension if no language provided
  const fileExtension = fileName.split('.').pop()
  const codeLanguage = language || fileExtension || 'tsx'

  useEffect(() => {
    async function fetchCode() {
      try {
        setIsLoading(true)
        const response = await fetch(
          `/api/code?filePath=${encodeURIComponent(filePath)}`
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`)
        }

        const data = await response.json()
        setCode(data.code)
        
        // We'll check if the content needs truncation after it's rendered
      } catch (err) {
        console.error('Error fetching code file:', err)
        setError(
          err instanceof Error ? err.message : 'Failed to load code file'
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchCode()
  }, [filePath])

  // Check if content height exceeds maxHeight after rendering
  useEffect(() => {
    if (!isLoading && !error && codeContainerRef.current) {
      const contentHeight = codeContainerRef.current.scrollHeight
      setShouldTruncate(contentHeight > maxHeight)
    }
  }, [isLoading, error, code, maxHeight])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <div className="border-b px-4 py-2 bg-muted flex items-center justify-between">
        <div className="flex items-center">
          <FiFile className="mr-2" />
          <span className="text-sm font-medium">{fileName}</span>
          <span className="ml-2 text-xs text-muted-foreground">
            {codeLanguage}
          </span>
        </div>
      </div>
      
      <div 
        ref={codeContainerRef}
        className={`relative ${shouldTruncate && !isExpanded ? `max-h-[${maxHeight}px]` : ''} overflow-hidden`}
        style={{ maxHeight: shouldTruncate && !isExpanded ? maxHeight : 'none' }}
      >
        {isLoading ? (
          <div className="p-4 text-sm">Loading code...</div>
        ) : error ? (
          <div className="p-4 text-sm text-red-500">{error}</div>
        ) : (
          <>
            <SyntaxHighlighter
              language={codeLanguage}
              style={isDarkTheme ? vscDarkPlus : vs}
              showLineNumbers
              customStyle={{ margin: 0 }}
            >
              {code}
            </SyntaxHighlighter>
            
            {shouldTruncate && !isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            )}
          </>
        )}
      </div>
      
      {shouldTruncate && (
        <button 
          onClick={toggleExpand}
          className="w-full flex items-center justify-center py-2 text-sm font-medium border-t hover:bg-muted transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <FiChevronUp className="mr-1" /> Show Less
            </>
          ) : (
            <>
              <FiChevronDown className="mr-1" /> Show More
            </>
          )}
        </button>
      )}
    </div>
  )
}
