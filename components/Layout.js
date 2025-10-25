import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen text-slate-100 bg-gradient-to-b from-[#030417] via-[#071029] to-[#0b1224]"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <header className="backdrop-blur sticky top-0 z-40 bg-black/25 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg text-white">Nishit Vankawala</Link>
          <nav className="space-x-6 text-slate-300 hidden md:block">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="py-8 mt-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nishit M. Vankawala — Built with Next.js & Framer Motion
        </div>
      </footer>
    </div>
  )
}
