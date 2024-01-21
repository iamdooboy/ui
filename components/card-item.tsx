import { cn } from '@/lib/utils'

interface CardItemProps {
  text: string
  className?: string
  children?: React.ReactNode
}

export function CardItem({ text, className, children }: CardItemProps) {
  return (
    <div
      className={cn(
        'bg-background flex h-full w-full items-center justify-center rounded-xl border',
        className
      )}
    >
      <span className='text-md text-card-foreground font-light tracking-wider'>
        {text}
      </span>
      {children}
    </div>
  )
}
