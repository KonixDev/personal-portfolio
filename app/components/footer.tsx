function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-10 mt-10 border-t border-white/5 pt-4 text-xs text-neutral-500">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[0.7rem] text-neutral-500">
          © {new Date().getFullYear()} Martín Coll
        </p>
        <ul className="flex flex-wrap gap-4 text-[0.75rem]">
          <li>
            <a
              href="mailto:contacto@martincoll.dev"
              className="inline-flex items-center gap-1 text-neutral-400 transition hover:text-neutral-200"
            >
              <ArrowIcon />
              <span>contacto@martincoll.dev</span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5491130756468"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 transition hover:text-neutral-200"
            >
              <ArrowIcon />
              <span>WhatsApp</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KonixDev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 transition hover:text-neutral-200"
            >
              <ArrowIcon />
              <span>github.com/KonixDev</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
