import React from 'react'
import { CardItem } from '@/card-item'
import { CardParallax } from '@/examples/card-parallax'

import { CardSpotlightBorder } from '../examples/card-spotlight-border'

export function CardSpotlightBorderDemo() {
  return (
    <CardSpotlightBorder
      className='h-52 w-40'
      spotlightColor='rgba(255, 128, 0, 0.1)'
    >
      <CardItem text='Hover me' />
    </CardSpotlightBorder>
  )
}
