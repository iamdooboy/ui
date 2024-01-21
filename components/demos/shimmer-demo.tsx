import { CardItem } from '@/card-item'

import { Shimmer } from '@/components/examples/shimmer'

export function ShimmerDemo() {
  return (
    <Shimmer className='h-52 w-40'>
      <CardItem text='Card Content' className='border-0 backdrop-blur-3xl' />
    </Shimmer>
  )
}
