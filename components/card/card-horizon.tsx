'use client'

import React from 'react'

import { cn } from '@/lib/utils'

export const CardHorizon = () => {
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
      className='relative h-52 w-40'
    >
      <div className='absolute top-0 flex w-full justify-center'>
        <div
          className={cn(
            'left-0 h-[1px] w-[10px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-yellow-100 to-[rgba(17,17,17,0)] opacity-0 transition-all duration-500',
            isHover && 'w-[100px] opacity-100 duration-500'
          )}
        />
      </div>
      <div className='bg-background flex h-full w-full items-center justify-center rounded-xl border'>
        <span className='text-md text-card-foreground font-light tracking-wider'>
          Hover me
        </span>
      </div>
    </div>
  )
}
