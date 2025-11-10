import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Sparkles, Store, Users2, ShieldCheck, ScrollText, Stars, Sword, Coins, Crown, Map, Trophy, MessageSquareQuote, ChevronRight, ServerCog, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative h-[85vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/90 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <p className="inline-flex items-center gap-2 text-emerald-300/90 font-semibold tracking-[0.2em] uppercase text-xs bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10">
            <Stars className="h-3 w-3" /> Fantasy Economy Realm
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-emerald-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.45)]">Welcome to ARKA SMP</span>
            <br />
            <span className="text-white/95">— A New Era Begins</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Join a thriving fantasy economy world where adventure, trade, and community meet.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#join" className="px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2">
              Join Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/store" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white font-semibold ring-1 ring-white/15 inline-flex items-center gap-2">
              Visit the Store <Store className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.12),transparent_40%)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">About ARKA SMP</h2>
          <p className="mt-4 text-white/80 max-w-3xl">
            The realm of ARKA has awakened once more. From the ruins of the old kingdoms rises a new age of merchants, adventurers, and guilds. Our fantasy economy system blends immersive roleplay with player-driven trade. Forge your path through quests, events, and legendary artifacts — the market is alive and every choice shapes the world.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Core Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Coins, title: 'Custom Economy', desc: 'Jobs, taxes, and market cycles that feel alive.' },
              { icon: Store, title: 'Player-Driven Market', desc: 'Auctions, shops, and trade caravans.' },
              { icon: ScrollText, title: 'Quests', desc: 'Story arcs and daily contracts for rewards.' },
              { icon: Trophy, title: 'Events', desc: 'Seasonal tournaments and world challenges.' },
              { icon: Crown, title: 'Legendary Items', desc: 'Hunt artifacts with unique perks and glow.' },
              { icon: ShieldCheck, title: 'Fair Play', desc: 'Balanced progression and anti-cheat systems.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
                <Icon className="h-6 w-6 text-emerald-300" />
                <h4 className="mt-4 text-xl font-semibold">{title}</h4>
                <p className="mt-2 text-white/70 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Community Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[220px] p-4 ring-1 ring-white/15 overflow-hidden">
              <div className="backdrop-blur bg-slate-900/50 w-fit px-3 py-1 rounded-full text-sm">Player Builds</div>
            </div>
            <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[220px] p-4 ring-1 ring-white/15 overflow-hidden">
              <div className="backdrop-blur bg-slate-900/50 w-fit px-3 py-1 rounded-full text-sm">Discord Activity</div>
            </div>
            <div className="rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[220px] p-4 ring-1 ring-white/15 overflow-hidden">
              <div className="backdrop-blur bg-slate-900/50 w-fit px-3 py-1 rounded-full text-sm">Testimonials</div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold">Join the Adventure</h3>
          <p className="mt-2 text-white/80">Connect now and be part of the story.</p>
          <div className="mt-6 inline-flex flex-col items-center gap-2 bg-white/5 ring-1 ring-white/10 px-6 py-4 rounded-xl">
            <p className="text-emerald-300 font-semibold">Server IP</p>
            <p className="text-2xl font-mono">play.arkasmp.net</p>
            <p className="text-white/60 text-sm">Versions: 1.20 - 1.21 | Java & Bedrock</p>
            <div className="mt-4 flex gap-3">
              <Link to="/server" className="px-5 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold">
                How to Join
              </Link>
              <a href="https://discord.gg/" target="_blank" className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15">
                Discord Invite
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
