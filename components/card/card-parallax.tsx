'use client'

import { MouseEvent, useCallback, useState } from 'react'

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

export const CardParallax = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
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
    <>
      <div
        className='relative h-52 w-40 rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform'
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}
      >
        <div className='group flex h-full w-full items-center justify-center rounded-lg border bg-background'>
          <div className='duration-600 absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 blur transition opacity-75' />
          <span className='text-md text-card-foreground tracking-wider font-light'>
            Hover me
          </span>
        </div>
      </div>
    </>
  )
}
