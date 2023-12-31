export const DynamicGridPattern = () => {
  const rows = new Array(50).fill(1)
  const cols = new Array(50).fill(1)

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className='absolute -top-1/4 left-1/4 z-0 flex -translate-x-1/2 -translate-y-1/2 p-4'
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className='relative h-8 w-16 border-l border-slate-700'
        >
          {cols.map((_, j) => (
            <div
              key={`col` + j}
              className='bg-background hover:bg-opacity/65 relative h-8 w-16 border-r border-t border-slate-700 transition-all duration-1000 hover:bg-slate-800 hover:duration-0'
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export const DynamicGridPatternDemo = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='bg-background pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]' />
      <DynamicGridPattern />
      <div className='relative z-20 flex flex-col items-center justify-center'>
        <h1 className='text-card-foreground text-xl shadow-sm'>
          Dynamic Grid Pattern
        </h1>
        <p className='text-muted-foreground text-sm'>Hover me</p>
      </div>
    </div>
  )
}
