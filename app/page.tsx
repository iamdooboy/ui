import Link from 'next/link'

import { CardComponent } from '@/components/card-component'

export default function Home() {
  return (
    <>
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div className='absolute -top-4 -z-10 flex w-full justify-center'>
            <div className='h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]' />
          </div>
          <div>
            <h1 className='mb-8 font-bold bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-9xl text-transparent md:text-5xl'>
              Trendy Tailwind CSS components for React
            </h1>
            <p className='text-xl text-slate-500'>
              A collection of copy and paste components for your next project.
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Link
            href={`/dsfdf`}
            className='relative flex items-center justify-center rounded-lg bg-gray-800/40 px-8 py-32 backdrop-blur '
          >
            tewt
          </Link>
          {/* {COMPONENTS.map((item, index) => (
            <CardComponent key={index} slug={item.slug} name={item.name}>
              <item.component />
            </CardComponent>
          ))} */}
        </div>
      </div>
    </>
  )
}
