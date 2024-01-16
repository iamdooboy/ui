import { COMPONENTS_LIST } from '@/data/component-list'

import { CardContainer } from '@/components/card-container'

export default function Home() {
  return (
    <>
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div>
            <h1 className='mb-8 text-9xl font-bold text-white md:text-5xl'>
              Trendy Tailwind CSS components for React
            </h1>
            <p className='text-xl text-slate-500'>
              A collection of copy and paste components for your next project.
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl py-10'>
        <div className='grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3'>
          {COMPONENTS_LIST.map((item, index) => (
            <CardContainer
              key={index}
              slug={item.slug}
              name={item.name}
              description={item.description}
            >
              <item.component />
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  )
}
