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
    <div className='from-background relative w-96 items-center justify-center overflow-hidden bg-[radial-gradient(150%_70%_at_center,var(--tw-gradient-stops))] to-transparent py-20'>
      <InfiniteCarousel reverseDirection={true} pauseOnHover={true}>
        {LOGOS.map((Logo) => (
          <Logo.icon key={Logo.name} className='size-12 cursor-pointer' />
        ))}
      </InfiniteCarousel>
      <div className='dark:from-background pointer-events-none absolute inset-y-0 left-0 top-1/4 h-1/2 w-1/3 bg-gradient-to-r from-white' />
      <div className='dark:from-background pointer-events-none absolute inset-y-0 right-0 top-1/4 h-1/2 w-1/3 bg-gradient-to-l from-white' />
    </div>
  )
}
