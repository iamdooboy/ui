import Link from 'next/link'

type CardComponentProps = {
  children: React.ReactNode
  slug: string
  name: string
  description: string
}

export const CardContainer = ({
  children,
  slug,
  name,
  description,
}: CardComponentProps) => (
  <Link href={`/${slug}`}>
    <div className='relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px] py-10'>
      {children}
    </div>
    <p className='mb-2 mt-4 text-xl font-bold text-neutral-700 dark:text-neutral-100'>
      {name}
    </p>
    <p className='text-muted-foreground mt-2 text-sm font-normal'>
      {description}
    </p>
  </Link>
)
