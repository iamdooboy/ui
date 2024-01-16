import React from 'react'
import { CardItem } from '@/card-item'
import { CardParallax } from '@/examples/card-parallax'

export function CardParallaxDemo() {
  return (
    <CardParallax className='h-52 w-40'>
      <CardItem text='Hover me' className='bg-primary-foreground' />
    </CardParallax>
  )
}
