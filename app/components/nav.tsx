import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-6">
        <nav
          className="flex items-center justify-between rounded-full border border-white/5 bg-black/40 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur md:px-4"
          id="nav"
        >
          <div className="flex flex-row items-center gap-1 md:gap-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative rounded-full px-2 py-1 capitalize text-[0.75rem] text-neutral-400 transition hover:text-neutral-50 hover:bg-white/5"
                >
                  {name}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/files/2025_v2_Martin_Coll_CV_Full_Stack_Developer.pdf"
              className="hidden md:inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span>Descargar CV</span>
            </a>
            <a
              href="/files/2025_v2_Martin_Coll_CV_Full_Stack_Developer.pdf"
              className="md:hidden inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-2 py-0.5 text-[0.68rem] font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>CV</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
