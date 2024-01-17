import { cn } from '@/lib/utils'

interface CardItemProps {
  text: string
  className?: string
}

export function CardItem({ text, className }: CardItemProps) {
  return (
    <div
      className={cn(
        'bg-background group flex h-full w-full items-center justify-center rounded-lg border',
        className
      )}
    >
      <span className='text-md text-card-foreground font-light tracking-wider'>
        {text}
      </span>
    </div>
  )
}
