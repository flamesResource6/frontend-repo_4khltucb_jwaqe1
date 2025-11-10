import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Spline from '@splinetool/react-spline'
import Particles from '../components/Particles'
import { Sparkles, Star, Store, Sword, Users, Crown, Coins } from 'lucide-react'

const features = [
  { title: 'Custom Economy', desc: 'A living market with dynamic pricing and jobs.', icon: Coins },
  { title: 'Player-Driven Market', desc: 'Trade goods, run shops, and dominate commerce.', icon: Store },
  { title: 'Quests & Events', desc: 'Seasonal stories, world events, and bounties.', icon: Star },
  { title: 'Legendary Items', desc: 'Hunt artifacts with unique powers and glow.', icon: Sword },
  { title: 'Community', desc: 'Thriving Discord, towns, alliances, and lore.', icon: Users },
  { title: 'Ranks & Perks', desc: 'Progression system that respects gameplay.', icon: Crown },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero with Spline cover */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
        <Particles density={50} color="rgba(16,185,129,0.35)" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <p className="text-emerald-300 font-bold tracking-wide">ARKA SMP</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
              Welcome to ARKA SMP — A New Era Begins
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Join a thriving fantasy economy world where adventure, trade, and community meet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join" className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-bold shadow-lg shadow-emerald-600/20">Join Now</a>
              <a href="/store" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">Visit the Store</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-emerald-800/10 to-slate-950" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">About ARKA SMP</h2>
          <p className="mt-3 text-white/80">
            After a cataclysm that shattered the old world, the realm of ARKA awakens anew. Guilds rise, markets stir, and ancient runes glow once more. Forge your legend through trade, quests, and community.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-700/10 via-indigo-900/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Core Features</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center ring-1 ring-white/20">
                  <f.icon className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="text-white/70 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-300/5 via-transparent to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Community Highlights</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i)=> (
              <div key={i} className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-2 left-2 text-sm text-white/80">Build #{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Join */}
      <section id="join" className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-700/10 via-emerald-500/5 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">Join the Adventure</h2>
          <p className="mt-2 text-white/80">IP: play.arkasmp.com • Discord: discord.gg/arka</p>
          <div className="mt-4 flex gap-3 justify-center">
            <a href="/server" className="px-5 py-3 rounded-md bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-bold">How to Join</a>
            <a href="/store" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">Visit Store</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
