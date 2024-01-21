import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

import { cn } from '@/lib/utils'
import { Navbar } from '@/components/nav-bar'

export const metadata: Metadata = {
  title: 'Trendy UI',
  description:
    'A collection of UI beautifully crafted components across the web',
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={cn(GeistSans.className, 'dark')}
        suppressHydrationWarning
      >
        <div className='bg-background'>
          <div className='px-4s mx-auto flex min-h-screen max-w-7xl flex-col'>
            <Navbar />
            <main className='flex-1'>{props.children}</main>
            {/* {props.modal} */}
            <footer className='mt-32 flex items-center justify-center py-8'>
              <span className='text-sm text-gray-400'>
                Made by
                <a
                  href='https://github.com/iamdooboy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-blue-400'
                >
                  Duy Le
                </a>
              </span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
