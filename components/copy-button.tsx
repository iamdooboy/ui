"use client"

import { Check, Copy } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

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
      className={cn("bg-muted rounded-md p-3", className)}
      onClick={() => {
        navigator.clipboard.writeText(copyToClipboard)
        setHasCopied(true)
      }}
    >
      {hasCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  )
}
