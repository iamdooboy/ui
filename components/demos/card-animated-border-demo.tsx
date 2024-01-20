import { CardItem } from '@/card-item'

import { CardAnimatedBorder } from '@/examples/card-animated-border'

export function CardAnimatedBorderDemo() {
  return (
    <CardAnimatedBorder className='h-52 w-40' to='#ddd1fa' from='#5318e7' stop='#5318e7'>
      <CardItem text='Hover me' className='backdrop-blur-3xl' />
    </CardAnimatedBorder>
  )
}
