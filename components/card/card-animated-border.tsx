export const CardAnimatedBorder = () => {
  return (
    <div className='relative h-52 w-52 overflow-hidden rounded-xl border p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EFD26C_0%,#6CB0EF_50%,#EFD26C_100%)]' />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl px-3 py-1 text-sm bg-background font-medium text-white backdrop-blur-3xl'>
        Card content
      </div>
    </div>
  )
}
