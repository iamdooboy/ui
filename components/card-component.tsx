import Link from 'next/link'

type CardComponentProps = {
  children: React.ReactNode
  slug: string
  name: string
}

export const CardComponent = ({ children, slug, name }: CardComponentProps) => (
  <Link href={`/${slug}`}>
    <div className='relative flex flex-col items-center justify-center rounded-lg border border-white/[0.2] py-10'>
      <div className='[&>button]:w-40 [&>div]:w-40 [&>input]:w-40'>
        {children}
      </div>
    </div>
    <p className='text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700'>
      {name}
    </p>
  </Link>
)
