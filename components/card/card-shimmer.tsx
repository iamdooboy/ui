'use client'

import React from 'react'

import { cn } from '@/lib/utils'

export const CardShimmer = () => {
  const [isHover, setIsHover] = React.useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative h-52 w-52 overflow-hidden rounded-xl border p-[1px] backdrop-blur-3xl'
    >
      <span
        className={cn(
          'absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-400 opacity-0',
          isHover && 'opacity-100'
        )}
      />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
        Hover me
      </div>
    </div>
  )
}
