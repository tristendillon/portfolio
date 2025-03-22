import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const filePath = searchParams.get('filePath')

    if (!filePath) {
      return NextResponse.json(
        { error: 'Missing filePath parameter' },
        { status: 400 }
      )
    }

    // Resolve the file path relative to the project root
    // This prevents path traversal attacks by restricting to the public directory
    const fullPath = path.join(process.cwd(), 'public', 'code', filePath)

    // Ensure the path doesn't escape the public/code directory
    const relativePath = path.relative(
      path.join(process.cwd(), 'public', 'code'),
      fullPath
    )
    
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 403 }
      )
    }

    // Read the file
    const fileContent = await fs.readFile(fullPath, 'utf-8')

    return NextResponse.json({ code: fileContent })
  } catch (error) {
    console.error('Error reading code file:', error)
    
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to read file' },
      { status: 500 }
    )
  }
}