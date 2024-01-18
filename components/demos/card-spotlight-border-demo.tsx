import { CardItem } from '@/card-item'

import { CardSpotlightBorder } from '../examples/card-spotlight-border'

export function CardSpotlightBorderDemo() {
  return (
    <CardSpotlightBorder
      className='h-52 w-40'
      spotlightColor='#0EA5E9'
    >
      <CardItem text='Hover me' />
    </CardSpotlightBorder>
  )
}
