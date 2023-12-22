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
      className='relative h-52 w-52'
    >
      <div className='absolute top-0 flex w-full justify-center'>
        <div
          className={cn(
            'left-0 h-[1px] w-[10px] opacity-0 rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-yellow-100 to-[rgba(17,17,17,0)] transition-all duration-500',
            isHover && 'w-[100px] opacity-100 duration-500'
          )}
        />
      </div>
      <div className='flex h-full items-center justify-center rounded-lg border border-slate-800 bg-black'>
        <p className='text-sm text-slate-200'>Hover me</p>
      </div>
    </div>
  )
}
