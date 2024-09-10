import { Icons } from "@/icons"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/">
        <div className="text-xl font-bold text-white">UI</div>
      </Link>
      <nav className="flex gap-6">
        <a
          href="https://github.com/iamdooboy/ui"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Icons.gitHub className="size-6 text-slate-400 transition-colors hover:text-white" />
        </a>
      </nav>
    </header>
  )
}
