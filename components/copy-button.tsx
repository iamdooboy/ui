'use client'

import React from 'react'
import { Check, Copy } from 'lucide-react'

import { cn } from '@/lib/utils'

interface CopyButtonProps {
  className?: string
  copyToClipboard: string
}

export function CopyButton({ className, copyToClipboard }: CopyButtonProps) {
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
        navigator.clipboard.writeText(copyToClipboard)
        setHasCopied(true)
      }}
    >
      {hasCopied ? (
        <Check className='mr-2 h-4 w-4' />
      ) : (
        <Copy className='mr-2 h-4 w-4' />
      )}
    </button>
  )
}
