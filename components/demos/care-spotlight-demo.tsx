import React from 'react'
import { CardItem } from '@/card-item'
import { CardParallax } from '@/examples/card-parallax'

import { CardSpotlight } from '../examples/card-spotlight'

export function CardSpotlightDemo() {
  return (
    <CardSpotlight
      className='h-52 w-40'
      spotlightColor='rgba(255, 128, 0, 0.1)'
    >
      <CardItem text='Hover me' className='bg-primary-foreground' />
    </CardSpotlight>
  )
}
