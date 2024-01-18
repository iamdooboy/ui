import { CardItem } from '@/card-item'

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
