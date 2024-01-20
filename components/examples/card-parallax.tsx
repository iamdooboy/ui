'use client'

import * as React from 'react'

import { ExampleProps } from '@/types/type'
import { cn } from '@/lib/utils'

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  return (...args: Parameters<T>) => {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return func(...args)
  }
}

export const CardParallax = ({ className, children }: ExampleProps) => {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 })

  //using usecallback here to mitigate eslint warning
  //usecallback(fn, deps) is equivalent to usememo(() => fn, deps).
  const onMouseMove = React.useMemo(
    () =>
      throttle((e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        const box = card.getBoundingClientRect()
        const x = e.clientX - box.left
        const y = e.clientY - box.top
        const centerX = box.width / 2
        const centerY = box.height / 2
        const rotateX = (y - centerY) / 4
        const rotateY = (centerX - x) / 4

        setRotate({ x: rotateX, y: rotateY })
      }, 100),
    []
  )

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      className={cn(
        'relative h-full w-full rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform',
        className
      )}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
      }}
    >
      {children}
    </div>
  )
}
