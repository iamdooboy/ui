'use client'

import { FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog'

interface ModalProps {
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter()

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.push('/')
    }
  }
  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogPortal>
        <DialogOverlay className='bg-background/10' />
        <DialogContent className='sm:max-w-[425px]'>{children}</DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default Modal
