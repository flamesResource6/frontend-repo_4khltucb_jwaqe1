import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Coins, Store, Trophy, BookOpen, Youtube } from 'lucide-react'

export default function Guide() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-emerald-800/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-yellow-300">Getting Started in ARKA SMP</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Learn the basics, master the economy, and rise through the ranks.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg flex items-center gap-2"><Coins className="h-5 w-5 text-emerald-300"/> Earning Money</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                <li>Take on jobs to earn steady income</li>
                <li>Complete quests for rare rewards</li>
                <li>Sell resources via player shops</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg flex items-center gap-2"><Store className="h-5 w-5 text-emerald-300"/> Trading & Market</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                <li>Use the auction to buy/sell items</li>
                <li>Create chest shops in your town</li>
                <li>Track prices and seasonal demands</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg flex items-center gap-2"><Trophy className="h-5 w-5 text-emerald-300"/> Ranks & Perks</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                <li>Progress through ranks by playing</li>
                <li>Unlock perks that boost your journey</li>
                <li>Support the server via the store</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-emerald-300"/> Rules</h3>
            <ol className="mt-3 space-y-2 text-white/80 text-sm list-decimal list-inside">
              <li>Respect all players and staff</li>
              <li>No cheating or exploiting bugs</li>
              <li>Keep the market fair and transparent</li>
            </ol>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold">
                <Youtube className="h-4 w-4"/> Watch Tutorial
              </a>
              <a href="/server" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">
                Server Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
