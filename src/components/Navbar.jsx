import { Link, NavLink } from 'react-router-dom'
import { Menu, Swords, Store, Info, BookOpenText, Wand2 } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', icon: Wand2 },
  { to: '/store', label: 'Store', icon: Store },
  { to: '/server', label: 'Server Info', icon: Info },
  { to: '/guide', label: 'Guide', icon: BookOpenText },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-600/30 grid place-items-center ring-1 ring-white/20">
              <Swords className="h-5 w-5 text-slate-900" />
            </div>
            <div className="leading-tight">
              <p className="text-emerald-300 font-black tracking-wide text-sm">ARKA</p>
              <p className="text-white/90 font-semibold -mt-1">SMP</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${isActive ? 'text-emerald-300 bg-white/5 ring-1 ring-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
              >
                <Icon className="h-4 w-4" /> {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white/90 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-emerald-300 bg-white/5 ring-1 ring-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
