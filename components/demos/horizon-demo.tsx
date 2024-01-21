import { CardItem } from '@/card-item'
import { Horizon } from '@/components/examples/horizon'

export function CardHorizonDemo() {
  return (
    <Horizon className='h-52 w-40'>
      <CardItem text='Hover me' />
    </Horizon>
  )
}
