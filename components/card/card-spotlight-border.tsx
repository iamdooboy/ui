'use client'

import React, { useRef, useState } from 'react'

export const CardSpotlightBorder = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

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
    setOpacity(0)
  }

  return (
    <div className='relative h-52 w-52'>
      <div
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='flex h-full w-full items-center justify-center overflow-hidden rounded-xl border bg-black px-8 py-16 shadow-2xl'
      >
        <p className='text-sm text-slate-200'>Hover me</p>
      </div>
      <div
        ref={divRef}
        className='pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-xl border border-[#0ea5e9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none'
        style={{
          border: '1px solid #0ea5e9',
          opacity,
          WebkitMaskImage: `radial-gradient(50% 60px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      />
    </div>

  )
}
