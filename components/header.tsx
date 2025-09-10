import { MailIcon } from "@/components/icons/mail-icon"
import { MenuIcon } from "@/components/icons/menu-icon"

export function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <MailIcon className="text-blue-400" />
          <span className="text-xl font-bold tracking-tight text-white">MailFusion</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#testimonials">
            Testimonials
          </a>
        </div>
        <button className="flex md:hidden items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white">
          <MenuIcon />
        </button>
      </nav>
    </header>
  )
}
