import { Children, cloneElement, ReactNode } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  pauseOnHover?: boolean
  children?: ReactNode
}

export const InfiniteCarousel = ({ children }: MarqueeProps) => {
  return (
    <div className='flex w-full overflow-x-hidden [--duration:40s] [--gap:3rem]'>
      <div className='animate-infinite-scroll flex w-max items-stretch gap-[--gap] hover:[animation-play-state:paused]'>
        {children}
        {Children.map(children, (child) => cloneElement(child as any))}
      </div>
    </div>
  )
}

const logos = [
  {
    name: 'React',
    img: 'https://cdn.simpleicons.org/react/000/fff',
  },
  {
    name: 'Next.js',
    img: 'https://cdn.simpleicons.org/nextdotjs/000/fff',
  },
  {
    name: 'Tailwind CSS',
    img: 'https://cdn.simpleicons.org/tailwindcss/000/fff',
  },
  {
    name: 'Typescript',
    img: 'https://cdn.simpleicons.org/typescript/000/fff',
  },
  {
    name: 'shadcn/ui',
    img: 'https://cdn.simpleicons.org/shadcnui/000/fff',
  },
  {
    name: 'Vercel',
    img: 'https://cdn.simpleicons.org/vercel/000/fff',
  },
]

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={cn('h-12 w-12 cursor-pointer')}>
      <img src={img} alt={name}/>
    </div>
  )
}

export const InfiniteCarouselDemo = () => {
  return (
    <div className='bg-background relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg py-20 shadow-2xl'>
      <InfiniteCarousel>
        {logos.map((logo, idx) => (
          <Logo key={idx} {...logo} />
        ))}
      </InfiniteCarousel>
      <div className='dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white' />
      <div className='dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white' />
    </div>
  )
}
