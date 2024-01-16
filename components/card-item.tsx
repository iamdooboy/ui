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
      {/* <div className='duration-600 absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition' /> */}
      <span className='text-md text-card-foreground font-light tracking-wider'>
        {text}
      </span>
    </div>
  )
}
