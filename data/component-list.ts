import { AnimatedBorderDemo } from '@/components/demos/animated-border-demo'
import { DynamicGridPatternDemo } from '@/components/demos/dynamic-grid-pattern-demo'
import { CardHorizonDemo } from '@/components/demos/horizon-demo'
import { InfiniteCarouselDemo } from '@/components/demos/infinite-carousel-demo'
import { MeteorsDemo } from '@/components/demos/meteor-demo'
import { ParallaxDemo } from '@/components/demos/parallax-demo'
import { SpotlightDemo } from '@/components/demos/potlight-demo'
import { ShimmerDemo } from '@/components/demos/shimmer-demo'
import { SpotlightBorderDemo } from '@/components/demos/spotlight-border-demo'

export const COMPONENTS_LIST = [
  {
    name: 'Parallax',
    component: ParallaxDemo,
    slug: 'card-parallax',
    description: 'A 3D tilt hover effect.',
  },
  {
    name: 'Spotlight',
    component: SpotlightDemo,
    slug: 'card-spotlight',
    description: 'A spotlight effect that follows the mouse cursor on hover.',
  },
  {
    name: 'Spotlight Border',
    component: SpotlightBorderDemo,
    slug: 'card-spotlight-border',
    description: 'A spotlight effect that highlights border on hover.',
  },
  {
    name: 'Shimmer',
    component: ShimmerDemo,
    slug: 'card-shimmer',
    description:
      'A shimmering light that travels around the perimeter on hover.',
  },
  {
    name: 'Animated Border',
    component: AnimatedBorderDemo,
    slug: 'card-animated-border',
    description: 'A continuous animated gradient border effect.',
  },
  {
    name: 'Horizon',
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
    name: 'Meteor',
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
