import { Lang } from 'shiki'

import { highlight } from '@/lib/shiki'

import { CopyButton } from './copy-button'

type CodeProps = {
  code: string
  lang: Lang
}

export const Code = async ({ code, lang }: CodeProps) => {
  const component = await highlight(code, 'github-dark', lang)

  return (
    <div className='relative'>
      <CopyButton className='absolute right-0 top-0' copyToClipboard={code} />
      <div dangerouslySetInnerHTML={{ __html: component }} />
    </div>
  )
}
