import { CardItem } from '@/card-item'
import { Meteors } from '@/examples/meteors'

export const MeteorsDemo = () => {
  return (
    <div className='relative h-52 w-40 overflow-hidden rounded-xl border'>
      <CardItem text='Card content' className='bg-primary-foreground'>
        <Meteors number={30} />
      </CardItem>
    </div>
  )
}
