import React from 'react'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function Navbar() {
  return (
    <header className='flex items-center justify-between py-8'>
      <Link href='/'>
        <div className='text-xl text-white'>UI</div>
      </Link>
      <nav className='flex gap-6'>
        <a
          href='https://github.com/iamdooboy/ui'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <GitHubLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
        </a>
      </nav>
    </header>
  )
}
