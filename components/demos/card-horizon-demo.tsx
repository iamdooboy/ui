import { CardItem } from '@/card-item'
import { CardHorizon } from '@/examples/card-horizon'

export function CardHorizonDemo() {
  return (
    <CardHorizon className='h-52 w-40'>
      <CardItem text='Hover me' />
    </CardHorizon>
  )
}
