import { cn } from '@/lib/utils'

export const CardShimmer = () => {
  return (
    <div className='relative h-52 w-40 overflow-hidden rounded-[calc(.75em+1.5px)] border p-[1px]'>
      <div
        className={cn(
          'absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-400 opacity-100 transition-all'
        )}
      />
      <div className='bg-background flex h-full w-full items-center justify-center rounded-xl backdrop-blur-3xl'>
        <span className='text-md tracking-wider text-white'>Card content</span>
      </div>
    </div>
  )
}
