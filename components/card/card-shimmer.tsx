import { cn } from '@/lib/utils'

export const CardShimmer = () => {
  return (
    <div className='relative h-52 w-40 overflow-hidden border rounded-[calc(.75em+1.5px)] p-[1px]'>
      <div
        className={cn(
          'absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-400 transition-all opacity-100'
        )}
      />
      <div className='flex h-full w-full items-center justify-center bg-background backdrop-blur-3xl rounded-xl'>
        <span className='text-md text-white tracking-wider'>Card content</span>
      </div>
    </div>
  )
}
