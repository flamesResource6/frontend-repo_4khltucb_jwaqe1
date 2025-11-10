import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Shield, Boxes, Coins, Sparkles, Lock, Info } from 'lucide-react'

const products = [
  {
    id: 'rank-emerald',
    name: 'Emerald Rank',
    desc: 'Priority queue, bonus jobs income, cosmetic trails, and more.',
    price: 9.99,
    icon: Shield,
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'rank-diamond',
    name: 'Diamond Rank',
    desc: 'Daily keys, personal vault, marketplace perks, VIP chat flair.',
    price: 19.99,
    icon: Shield,
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'crates-mystic',
    name: 'Mystic Crate Keys (x5)',
    desc: 'Open for a chance at legendary artifacts and rare materials.',
    price: 7.99,
    icon: Boxes,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    id: 'coins-5000',
    name: '5,000 Coins',
    desc: 'Boost your economy start and expand your market reach.',
    price: 4.99,
    icon: Coins,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    id: 'bundle-cosmetic',
    name: 'Cosmetic Bundle',
    desc: 'Wings, particles, and emotes to glow like a true hero.',
    price: 5.99,
    icon: Sparkles,
    accent: 'from-pink-400 to-rose-500',
  },
]

export default function Store() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/10 via-indigo-700/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-yellow-300">
                Support the Realm — ARKA Store
              </span>
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Every purchase powers new content, events, and server upkeep. Thank you for keeping the world alive!
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${p.accent} grid place-items-center ring-1 ring-white/20 shadow-lg shadow-emerald-600/20`}>
                  <p.icon className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-emerald-300 font-bold">${p.price.toFixed(2)}</span>
                  <button className="px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Lock className="h-5 w-5 text-emerald-300" /> Secure Checkout</h2>
              <p className="text-white/70 mt-2 text-sm">This is a mock checkout. Connect your real store provider later (Tebex, CraftingStore, etc.).</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="Email" />
                <input className="bg-black/40 border border-white/10 rounded-md px-3 py-2" placeholder="IGN (Minecraft Username)" />
                <button className="sm:col-span-2 mt-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-bold py-2 rounded-md">Checkout</button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Info className="h-5 w-5 text-yellow-300" /> Where your support goes</h2>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                <li>Server hardware and DDoS protection</li>
                <li>New questlines, events, and seasonal content</li>
                <li>Builder commissions and asset licenses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
