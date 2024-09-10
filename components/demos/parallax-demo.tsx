import { CardItem } from "@/card-item"

import { Parallax } from "@/components/examples/parallax"

export function ParallaxDemo() {
  return (
    <Parallax className="h-52 w-40">
      <CardItem text="Hover me" className="bg-primary-foreground" />
    </Parallax>
  )
}
