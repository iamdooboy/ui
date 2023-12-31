export const CardAnimatedBorder = () => {
  return (
    <div className='relative h-52 w-40 overflow-hidden rounded-xl border p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EFD26C_0%,#6CB0EF_50%,#EFD26C_100%)]' />
      <div className='bg-background flex h-full w-full items-center justify-center rounded-xl border backdrop-blur-3xl'>
        <span className='text-md text-card-foreground font-light tracking-wider'>
          Card content
        </span>
      </div>
    </div>
  )
}
