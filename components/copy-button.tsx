'use client'

import React from 'react'
import { Check, Copy } from 'lucide-react'

import { cn } from '@/lib/utils'

interface CopyButtonProps {
  className?: string
  clipboard: string
}

export function CopyButton({ className, clipboard }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <button
      className={cn(className)}
      onClick={() => {
        navigator.clipboard.writeText(clipboard)
        setHasCopied(true)
      }}
    >
      {hasCopied ? (
        <Check className='mr-2 h-4 w-4' />
      ) : (
        <Copy className='mr-2 h-4 w-4' />
      )}
      {hasCopied ? 'Copied' : 'Copy'}
    </button>
  )
}
