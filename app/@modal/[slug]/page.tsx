import React, { Suspense } from 'react'

import Modal from '@/components/modal'

export default function Home() {
  return (
    <Modal>
      <Suspense fallback={<div>loading...</div>}>Hello</Suspense>
    </Modal>
  )
}
