import { CardParallaxDemo } from '@/components/demos/card-parallax-demo'
import { CardAnimatedBorder } from '@/components/examples/card-animated-border'
import { CardHorizon } from '@/components/examples/card-horizon'
import { CardParallax } from '@/components/examples/card-parallax'
import { CardShimmer } from '@/components/examples/card-shimmer'
import { CardSpotlight } from '@/components/examples/card-spotlight'
import { CardSpotlightBorder } from '@/components/examples/card-spotlight-border'
import { DynamicGridPatternDemo } from '@/components/examples/dynamic-grid-pattern'
import { InfiniteCarouselDemo } from '@/components/examples/infinite-carousel'
import { MeteorsDemo } from '@/components/examples/meteors'

export const COMPONENTS_LIST = [
  {
    name: 'Card Parallax',
    component: CardParallaxDemo,
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
    description: 'A continuous animated gradient border effect.',
  },
  {
    name: 'Card Horizon',
    component: CardHorizon,
    slug: 'card-horizon-border',
    description: 'A subtle horizon top border effect on hover.',
  },
  {
    name: 'Infinite Carousel',
    component: InfiniteCarouselDemo,
    slug: 'infinite-carousel',
    description: 'A carousel component with infinite motion.',
  },
  {
    name: 'Meteor Effect',
    component: MeteorsDemo,
    slug: 'meteors',
    description: 'A continuous meteor shower effect.',
  },
  {
    name: 'Dynamic Grid Pattern',
    component: DynamicGridPatternDemo,
    slug: 'dynamic-grid-patttern',
    description: 'A background grid pattern that highlights on hover.',
  },
]
