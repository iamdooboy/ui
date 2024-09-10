import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import "./globals.css"

import { Navbar } from "@/components/nav-bar"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "UI",
  description: "A collection of UI beautifully crafted components"
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background", GeistSans.className, "dark")}
        suppressHydrationWarning
      >
        <div className="px-4 mx-auto flex min-h-screen max-w-7xl flex-col">
          <Navbar />
          <main className="flex-1">{props.children}</main>
          {/* {props.modal} */}
          <footer className="mt-32 flex items-center justify-center py-8">
            <span className="text-sm text-gray-400">
              Made by
              <a
                href="https://github.com/iamdooboy"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-400"
              >
                Duy Le
              </a>
            </span>
          </footer>
        </div>
      </body>
    </html>
  )
}
