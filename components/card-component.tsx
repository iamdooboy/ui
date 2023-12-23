import Link from 'next/link'

type CardComponentProps = {
  children: React.ReactNode
  slug: string
  name: string
  description: string
}

export const CardComponent = ({
  children,
  slug,
  name,
  description,
}: CardComponentProps) => (
  <Link href={`/${slug}`}>
    <div className='relative flex flex-col items-center justify-center rounded-lg border py-10 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px]'>
      {children}
    </div>
    <p className='text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700'>
      {name}
    </p>
    <p className='mt-2 text-sm font-normal text-muted-foreground'>
      {description}
    </p>
  </Link>
)
