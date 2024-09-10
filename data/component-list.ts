import { AnimatedBorderDemo } from "@/components/demos/animated-border-demo"
import { DynamicGridPatternDemo } from "@/components/demos/dynamic-grid-pattern-demo"
import { CardHorizonDemo } from "@/components/demos/horizon-demo"
import { InfiniteCarouselDemo } from "@/components/demos/infinite-carousel-demo"
import { MeteorsDemo } from "@/components/demos/meteors-demo"
import { ParallaxDemo } from "@/components/demos/parallax-demo"
import { ShimmerDemo } from "@/components/demos/shimmer-demo"
import { SpotlightBorderDemo } from "@/components/demos/spotlight-border-demo"
import { SpotlightDemo } from "@/components/demos/spotlight-demo"

const TWCONFIG = {
  meteors: {
    "module.exports": {
      theme: {
        extend: {
          keyframes: {
            meteor: {
              "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
              "70%": { opacity: "1" },
              "100%": {
                transform: "rotate(215deg) translateX(-500px)",
                opacity: "0"
              }
            }
          },
          animation: {
            "meteor-effect": "meteor 5s linear infinite"
          }
        }
      }
    }
  },
  "infinite-scroll": {
    "module.exports": {
      theme: {
        extend: {
          keyframes: {
            "infinite-scroll": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(calc(-50% - var(--gap)/2))" }
            }
          },
          animation: {
            "infinite-scroll": "infinite-scroll var(--duration) linear infinite"
          }
        }
      }
    }
  }
}

export const COMPONENTS_LIST = [
  {
    name: "Parallax",
    component: ParallaxDemo,
    slug: "parallax",
    description: "A 3D tilt hover effect."
  },
  {
    name: "Spotlight",
    component: SpotlightDemo,
    slug: "spotlight",
    description: "A spotlight effect that follows the mouse cursor on hover."
  },
  {
    name: "Spotlight Border",
    component: SpotlightBorderDemo,
    slug: "spotlight-border",
    description: "A spotlight effect that highlights border on hover."
  },
  {
    name: "Shimmer",
    component: ShimmerDemo,
    slug: "shimmer",
    description:
      "A shimmering light that travels around the perimeter on hover."
  },
  {
    name: "Animated Border",
    component: AnimatedBorderDemo,
    slug: "animated-border",
    description: "A continuous animated gradient border effect."
  },
  {
    name: "Horizon",
    component: CardHorizonDemo,
    slug: "horizon",
    description: "A subtle horizon top border effect on hover."
  },
  {
    name: "Infinite Carousel",
    component: InfiniteCarouselDemo,
    slug: "infinite-carousel",
    description: "A carousel component with infinite motion.",
    twConfig: TWCONFIG["infinite-scroll"]
  },
  {
    name: "Meteors",
    component: MeteorsDemo,
    slug: "meteors",
    description: "A continuous meteor shower effect.",
    twConfig: TWCONFIG["meteors"]
  },
  {
    name: "Dynamic Grid Pattern",
    component: DynamicGridPatternDemo,
    slug: "dynamic-grid-pattern",
    description: "A background grid pattern that highlights on hover."
  }
]
