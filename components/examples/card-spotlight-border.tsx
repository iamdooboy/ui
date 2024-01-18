'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

interface SpotlightProps {
  children?: React.ReactNode
  className?: string
  spotlightColor?: string
}

export const CardSpotlightBorder = ({
  className,
  children,
  spotlightColor,
}: SpotlightProps) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(100)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(100)
  }

  return (
    <div
      className={cn(
        'bg-background relative h-full w-full overflow-hidden rounded-xl',
        className
      )}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        ref={divRef}
        className='pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-xl bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none'
        style={{
          border: `1px solid ${spotlightColor}`,
          opacity,
          WebkitMaskImage: `radial-gradient(70% 90px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      />
    </div>
  )
}
