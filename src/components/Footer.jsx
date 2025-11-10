import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { Youtube, Ticket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/80">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-emerald-300 font-black tracking-wide text-sm">ARKA SMP</p>
            <p className="text-white/70 mt-2 text-sm">A premium, story-driven fantasy economy Minecraft server.</p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <a href="#" className="text-white/80 hover:text-white inline-flex items-center gap-2">
              <DiscordLogoIcon /> Discord
            </a>
            <a href="#" className="text-white/80 hover:text-white inline-flex items-center gap-2">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a href="#" className="text-white/80 hover:text-white inline-flex items-center gap-2">
              <Ticket className="h-4 w-4" /> TikTok
            </a>
          </div>

          <div className="text-right md:text-right text-white/60 text-sm">
            © 2025 ARKA SMP — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
