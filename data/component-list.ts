import { CardParallaxDemo } from '@/components/demos/card-parallax-demo'
import { CardSpotlightBorderDemo } from '@/components/demos/card-spotlight-border-demo'
import { CardSpotlightDemo } from '@/components/demos/care-spotlight-demo'
import { CardAnimatedBorder } from '@/components/examples/card-animated-border'
import { CardHorizon } from '@/components/examples/card-horizon'
import { CardShimmer } from '@/components/examples/card-shimmer'
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
    component: CardShimmer,
    slug: 'card-shimmer',
    description:
      'A shimmering light that travels around the perimeter on hover.',
  },
  {
    name: 'Card Animated Border',
    component: CardAnimatedBorder,
    slug: 'card-animated-border',
    description: 'A continuous animated gradient border effect.',
  },
  {
    name: 'Card Horizon',
    component: CardHorizon,
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
