import CodeBlock from '@/components/code-block'

export default function ComponentPage() {
  const code = 'hello'

  return (
    <div className='mt-10 pb-32'>
      <h1 className='text-md mb-2 font-light text-gray-400'>test</h1>
      <div className='container text-white'>
        <div className='mt-8'>
          <CodeBlock code={code} lang='tsx' />
        </div>
      </div>
    </div>
  )
}
