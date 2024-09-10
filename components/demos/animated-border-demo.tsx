import { CardItem } from "@/card-item"
import { AnimatedBorder } from "@/components/examples/animated-border"

export function AnimatedBorderDemo() {
  return (
    <AnimatedBorder
      className="h-52 w-40"
      to="#ddd1fa"
      from="#5318e7"
      stop="#5318e7"
    >
      <CardItem text="Hover me" className="backdrop-blur-3xl" />
    </AnimatedBorder>
  )
}
