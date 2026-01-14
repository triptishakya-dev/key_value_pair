import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              KeyValueDB
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
            >
              Docs
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/components"
            >
              Components
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/blog"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other items could go here */}
          </div>
          <nav className="flex items-center">
             <Button variant="ghost" className="mr-2">Log in</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
