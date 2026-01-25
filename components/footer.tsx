import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-2 px-2 border-t border-border bg-white/95 dark:bg-background" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <p className="text-xs text-foreground/80 dark:text-muted-foreground">
          © {new Date().getFullYear()} Durva Kadam. All rights reserved.
        </p>
        {/* <div className="flex gap-2">
          <Link href="#about" className="text-xs text-foreground/80 dark:text-muted-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#work" className="text-xs text-foreground/80 dark:text-muted-foreground hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="#contact" className="text-xs text-foreground/80 dark:text-muted-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </div> */}
      </div>
    </footer>
  )
}
