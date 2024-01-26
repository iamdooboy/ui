'use client'

import * as React from 'react'

import { ExampleProps } from '@/types/type'
import { cn } from '@/lib/utils'

export const Horizon = ({ children, className }: ExampleProps) => {
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
      className={cn(
        'relative flex size-full justify-center rounded-xl',
        className
      )}
    >
      <div className='absolute top-0 flex w-full items-center justify-center'>
        <div
          className={cn(
            'h-[1px] w-[10px] bg-gradient-to-r from-[rgba(17,17,17,0)] via-yellow-100 to-[rgba(17,17,17,0)] opacity-0 transition-all duration-500',
            isHover && 'w-[100px] opacity-100 duration-500'
          )}
        />
      </div>
      {children}
    </div>
  )
}
