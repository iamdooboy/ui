import { CardItem } from '@/card-item'
import { CardShimmer } from '@/examples/card-shimmer'

export function CardShimmerDemo() {
  return (
    <CardShimmer className='h-52 w-40'>
      <CardItem
        text='Hover me'
        className='bg-primary-foreground'
      />
    </CardShimmer>
  )
}
