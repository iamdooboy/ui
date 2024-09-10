import { cn } from "@/lib/utils"
import { ExampleProps } from "@/types/type"

export const Shimmer = ({ children, className }: ExampleProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[calc(.75em+1.5px)] border p-[1px]",
        className
      )}
    >
      <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-400 opacity-100 transition-all" />
      {children}
    </div>
  )
}
