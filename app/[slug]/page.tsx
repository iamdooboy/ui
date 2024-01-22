import { promises as fs } from 'fs'
import path from 'path'
import { COMPONENTS_LIST } from '@/data/component-list'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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

  if (!currentComponent) return <div>Can&apos;t find component</div>

  const compFilePath = `./components/examples/${currentComponent?.slug}.tsx`
  const demoFilePath = `./components/demos/${currentComponent?.slug}-demo.tsx`

  const comp = await fs.readFile(path.join(process.cwd(), compFilePath), 'utf8')
  const demo = await fs.readFile(path.join(process.cwd(), demoFilePath), 'utf8')

  return (
    <div className='mt-6 w-full pb-32'>
      <h1 className='mb-2 text-2xl font-bold text-gray-400'>{slug}</h1>
      <div className='relative my-12 overflow-hidden rounded-xl border bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px] p-12 py-10'>
        <div className='flex h-40 w-full items-center justify-center'>
          <currentComponent.component />
        </div>
      </div>
      <Tabs defaultValue='code'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='code'>Code</TabsTrigger>
          <TabsTrigger value='usage'>Usage</TabsTrigger>
        </TabsList>
        <TabsContent value='code'>
          <CodeBlock code={comp} lang='tsx' />
        </TabsContent>
        <TabsContent value='usage'>
          <CodeBlock code={demo} lang='tsx' />
        </TabsContent>
      </Tabs>
    </div>
  )
}
