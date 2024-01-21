import { Code } from '@/code'
import { Lang } from 'shiki'

type CodeBlockProps = {
  code: string
  lang: Lang
  fileName?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang }) => {
  return (
    <div className='relative overflow-x-auto rounded-md border border-neutral-800 p-4'>
      <div className='pt-10'>
        <Code code={code} lang={lang} />
      </div>
    </div>
  )
}

export default CodeBlock
