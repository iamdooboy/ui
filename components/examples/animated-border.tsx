import { cn } from '@/lib/utils'

interface BorderProps {
  children?: React.ReactNode
  className?: string
  from?: string
  to?: string
  stop?: string
}

export const AnimatedBorder = ({
  children,
  className,
  from,
  to,
  stop
}: BorderProps) => {
  return (
    <div
      className={cn(
        'relative size-full overflow-hidden rounded-[calc(.75em+1.5px)] border p-[1px]',
        className
      )}
    >
      <div
        style={{
          backgroundImage: `conic-gradient(from 90deg at 50% 50%,${from} 0%,${to} 50%,${stop} 100%)`,
        }}
        className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite]'
      />
      {children}
    </div>
  )
}
