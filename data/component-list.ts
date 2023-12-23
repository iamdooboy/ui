import { BoxesContainer } from '@/components/background/boxes'
import { CardAnimatedBorder } from '@/components/card/card-animated-border'
import { CardHorizon } from '@/components/card/card-horizon'
import { CardParallax } from '@/components/card/card-parallax'
import { CardShimmer } from '@/components/card/card-shimmer'
import { CardSpotlight } from '@/components/card/card-spotlight'
import { CardSpotlightBorder } from '@/components/card/card-spotlight-border'
import { InfiniteCarouselDemo } from '@/components/infinite-carousel'

export const COMPONENTS_LIST = [
  {
    name: 'Card Parallax',
    component: CardParallax,
    slug: 'card-parallax',
    description: 'A 3D tilt hover effect.',
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    description: 'A spotlight effect that follows the mouse cursor on hover.',
  },
  {
    name: 'Card Spotlight Border',
    component: CardSpotlightBorder,
    slug: 'card-spotlight-border',
    description: 'A spotlight effect that highlights border on hover.',
  },
  {
    name: 'Card Shimmer',
    component: CardShimmer,
    slug: 'card-shimmer',
    description:
      'A shimmering light that travels around the perimeter on hover.',
  },
  {
    name: 'Card Animated Border',
    component: CardAnimatedBorder,
    slug: 'card-animate-border',
    description: 'A continuous animated gradient border effect',
  },
  {
    name: 'Card Horizon',
    component: CardHorizon,
    slug: 'card-horizon-border',
    description: 'A subtle horizon top border effect on hover',
  },
  {
    name: 'Infinite Carousel',
    component: InfiniteCarouselDemo,
    slug: 'infinite-carousel',
    description: 'A carousel component with infinite motion ',
  },
]
