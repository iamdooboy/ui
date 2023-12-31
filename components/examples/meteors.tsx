import { cn } from '@/lib/utils'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number || 20).fill(true)
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:translate-y-[-50%] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        ></span>
      ))}
    </>
  )
}

export const MeteorsDemo = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 h-full w-full scale-[0.80] rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />
      <div className='relative h-52 w-40 overflow-hidden rounded-xl border'>
        <div className='bg-background flex h-full w-full items-center justify-center rounded-xl'>
          <span className='text-md text-card-foreground font-light tracking-wider'>
            Card content
          </span>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}
