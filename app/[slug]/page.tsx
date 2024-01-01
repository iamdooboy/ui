import { promises as fs } from 'fs'
import path from 'path'
import { COMPONENTS_LIST } from '@/data/component-list'

import CodeBlock from '@/components/code-block'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slug = COMPONENTS_LIST.map((component) => ({
    slug: component.slug,
  }))

  return slug
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = params

  const currentComponent = COMPONENTS_LIST.find(
    (component) => component.slug === slug
  )

  const filePath = `./components/examples/${currentComponent?.slug}.tsx`

  const fileContent = await fs.readFile(
    path.join(process.cwd(), filePath),
    'utf8'
  )

  return (
    <div className='mt-10 pb-32'>
      <h1 className='text-md mb-2 font-light text-gray-400'>test</h1>
      <div className='text-white'>
        <div className='mt-8'>
          <CodeBlock code={fileContent} lang='tsx' />
        </div>
      </div>
    </div>
  )
}
