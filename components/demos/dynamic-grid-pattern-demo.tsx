import { DynamicGridPattern } from '@/examples/dynamic-grid-pattern'

export const DynamicGridPatternDemo = () => {
  return (
    <div className='flex size-full items-center justify-center'>
      <div className='bg-background pointer-events-none absolute inset-0 z-20 size-full [mask-image:radial-gradient(transparent,white)]' />
      <DynamicGridPattern numOfCols={100} numOfRows={100} />
      <div className='relative z-20 flex flex-col items-center justify-center'>
        <h1 className='text-card-foreground text-xl shadow-sm'>
          Dynamic Grid Pattern
        </h1>
        <p className='text-muted-foreground text-sm'>Hover me</p>
      </div>
    </div>
  )
}
