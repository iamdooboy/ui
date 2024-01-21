import { CardAnimatedBorderDemo } from '@/components/demos/card-animated-border-demo'
import { CardHorizonDemo } from '@/components/demos/card-horizon-demo'
import { CardParallaxDemo } from '@/components/demos/card-parallax-demo'
import { CardShimmerDemo } from '@/components/demos/card-shimmer-demo'
import { CardSpotlightBorderDemo } from '@/components/demos/card-spotlight-border-demo'
import { CardSpotlightDemo } from '@/components/demos/card-spotlight-demo'
import { InfiniteCarouselDemo } from '@/components/demos/infinite-carousel-demo'
import { DynamicGridPatternDemo } from '@/components/examples/dynamic-grid-pattern'
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
    component: CardSpotlightDemo,
    slug: 'card-spotlight',
    description: 'A spotlight effect that follows the mouse cursor on hover.',
  },
  {
    name: 'Card Spotlight Border',
    component: CardSpotlightBorderDemo,
    slug: 'card-spotlight-border',
    description: 'A spotlight effect that highlights border on hover.',
  },
  {
    name: 'Card Shimmer',
    component: CardShimmerDemo,
    slug: 'card-shimmer',
    description:
      'A shimmering light that travels around the perimeter on hover.',
  },
  {
    name: 'Card Animated Border',
    component: CardAnimatedBorderDemo,
    slug: 'card-animated-border',
    description: 'A continuous animated gradient border effect.',
  },
  {
    name: 'Card Horizon',
    component: CardHorizonDemo,
    slug: 'card-horizon',
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
    slug: 'dynamic-grid-pattern',
    description: 'A background grid pattern that highlights on hover.',
  },
]
