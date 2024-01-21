import { InfiniteCarousel } from '@/examples/infinite-carousel'
import { Icons } from '@/icons'

const LOGOS = [
  {
    name: 'React',
    icon: Icons.react,
  },
  {
    name: 'Next.js',
    icon: Icons.nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: Icons.tailwind,
  },
  {
    name: 'Typescript',
    icon: Icons.typescript,
  },
  {
    name: 'shadcn/ui',
    icon: Icons.shadcn,
  },
  {
    name: 'Vercel',
    icon: Icons.vercel,
  },
]

export const InfiniteCarouselDemo = () => {
  return (
    <div className='bg-background relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg py-20 shadow-2xl'>
      <InfiniteCarousel reverseDirection={true} pauseOnHover={true}>
        {LOGOS.map((Logo) => (
          <Logo.icon key={Logo.name} className='h-12 w-12 cursor-pointer' />
        ))}
      </InfiniteCarousel>
      <div className='dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white' />
      <div className='dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white' />
    </div>
  )
}
