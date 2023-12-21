import Link from 'next/link'

type CardComponentProps = {
  children: React.ReactNode
  slug: string
  name: string
}

export const CardComponent = ({ children, slug, name }: CardComponentProps) => (
  <Link
    href={`/${slug}`}
    className='relative flex items-center justify-center rounded-lg bg-gray-800/40 px-8 py-32 backdrop-blur '
  >
    <div className='[&>button]:w-40 [&>div]:w-40 [&>input]:w-40'>
      {children}
    </div>
    <p className='text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700'>
      {name}
    </p>
  </Link>
)
