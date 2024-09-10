import { CardItem } from "@/card-item"
import { SpotlightBorder } from "@/components/examples/spotlight-border"

export function SpotlightBorderDemo() {
  return (
    <SpotlightBorder className="h-52 w-40" spotlightColor="#0EA5E9">
      <CardItem text="Hover me" />
    </SpotlightBorder>
  )
}
