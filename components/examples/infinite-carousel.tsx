import { Children, ReactNode, cloneElement } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  children?: ReactNode
  reverseDirection?: boolean
  pauseOnHover?: boolean
}

export const InfiniteCarousel = ({
  className,
  children,
  reverseDirection,
  pauseOnHover
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-x-hidden [--duration:20s] [--gap:3rem]",
        className
      )}
    >
      <div
        className={cn(
          "animate-infinite-scroll flex w-max items-stretch gap-[--gap]",
          {
            "[animation-direction:reverse]": reverseDirection,
            "hover:[animation-play-state:paused]": pauseOnHover
          }
        )}
      >
        {children}
        {Children.map(children, (child) => cloneElement(child as any))}
      </div>
    </div>
  )
}
