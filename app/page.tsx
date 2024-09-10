import { COMPONENTS_LIST } from "@/data/component-list"

import { CardContainer } from "@/components/card-container"

export default function Home() {
  return (
    <>
      <section>
        <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
          <div>
            <h1 className="bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
              React + Tailwind components
            </h1>
            <p className="mt-6 text-center text-gray-500 [text-wrap:balance] md:text-xl">
              A collection of copy-paste interactive components for your
              projects.
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3">
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
