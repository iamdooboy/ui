import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

import { cn } from '@/lib/utils'
import { Navbar } from '@/components/nav-bar'

export const metadata: Metadata = {
  title: 'UI',
  description:
    'A collection of UI beautifully crafted components across the web',
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    // <html lang='en'>
    //   <body className={GeistSans.className} style={{ padding: '50px' }}>
    //     <div className='space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0'>
    //       {props.children}
    //       {props.modal}
    //     </div>
    //   </body>
    // </html>
    <html lang='en'>
      <body
        className={cn(GeistSans.className, 'dark')}
        suppressHydrationWarning
      >
        <div className='bg-background'>
          <div className='mx-auto flex min-h-screen max-w-5xl flex-col px-4'>
            <Navbar />
            <main className='flex-1'>{props.children}</main>
            {props.modal}
            <footer>
              <div className='flex items-center justify-center py-8'>
                <span className='text-sm text-gray-400'>
                  Made by
                  <a
                    href='https://github.com/iamdooboy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-1 text-white'
                  >
                    Duy Le
                  </a>
                </span>
              </div>
            </footer>

          </div>
        </div>
      </body>
    </html>
  )
}
