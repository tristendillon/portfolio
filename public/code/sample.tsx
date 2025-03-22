import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  ariaLabel?: string
}

/**
 * A versatile button component that provides various styles and sizes
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  ariaLabel,
}: ButtonProps) {
  // Base styles for all buttons
  const baseStyles =
    'rounded font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none'

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-gray-300 hover:bg-gray-100 focus:ring-gray-400',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
    link: 'text-blue-600 hover:underline focus:ring-blue-500 p-0 focus:ring-0 focus:ring-offset-0',
  }

  // Size-specific styles
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl',
  }

  // Disabled state
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer'

  // Full width
  const widthStyles = fullWidth ? 'w-full' : ''

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${widthStyles}
    ${className}
  `

  // Click handler that respects disabled state
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    onClick?.()
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <span className="inline-flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {children}
        </span>
      ) : (
        <span className="inline-flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      )}
    </button>
  )
}

export default Button
