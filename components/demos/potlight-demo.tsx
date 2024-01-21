import { CardItem } from '@/card-item'

import { Spotlight } from '@/components/examples/spotlight'

export function SpotlightDemo() {
  return (
    <Spotlight className='h-52 w-40' spotlightColor='rgba(255, 128, 0, 0.1)'>
      <CardItem text='Hover me' className='bg-primary-foreground' />
    </Spotlight>
  )
}
