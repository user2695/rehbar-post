import Link from "next/link"
import { Button } from "@/app/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">RehbarPost</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Home</Link>
            <Link href="#features">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#pricing">Plans</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button className="hidden md:inline-flex">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}