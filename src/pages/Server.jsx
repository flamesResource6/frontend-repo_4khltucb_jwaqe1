import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Server, Copy, Gamepad2, Users2, Wifi } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ServerPage() {
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/server/status`).then(r=>r.json()).then(setStatus).catch(()=>setStatus({online:false}))
  }, [])

  const copy = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-emerald-800/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h1 className="text-3xl font-extrabold">Server Info</h1>
              <p className="text-white/70 mt-2">Join the world of ARKA SMP. Adventure and economy await.</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-white/70">Server IP</p>
                    <p className="text-lg font-semibold">play.arkasmp.com</p>
                  </div>
                  <button onClick={()=>copy('play.arkasmp.com')} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm inline-flex items-center gap-2"><Copy className="h-4 w-4"/> Copy</button>
                </div>

                <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-white/70">Supported</p>
                    <p className="text-lg font-semibold">Java 1.20+ • Bedrock</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-center">
                    <Server className="h-5 w-5 mx-auto text-emerald-300"/>
                    <p className="text-xs text-white/60 mt-1">Status</p>
                    <p className="font-semibold">{status?.online? 'Online':'Offline'}</p>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-center">
                    <Users2 className="h-5 w-5 mx-auto text-emerald-300"/>
                    <p className="text-xs text-white/60 mt-1">Players</p>
                    <p className="font-semibold">{status?.player_count ?? 0}/{status?.max_players ?? 100}</p>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-4 text-center">
                    <Wifi className="h-5 w-5 mx-auto text-emerald-300"/>
                    <p className="text-xs text-white/60 mt-1">MOTD</p>
                    <p className="font-semibold text-xs">{status?.motd ?? '-'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-emerald-300"/> How to Join</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-black/40 border border-white/10 p-4">
                  <h3 className="font-semibold">Java Edition</h3>
                  <ol className="list-decimal list-inside text-sm text-white/80 mt-2 space-y-1">
                    <li>Open Minecraft Java 1.20+</li>
                    <li>Multiplayer → Add Server</li>
                    <li>IP: play.arkasmp.com</li>
                    <li>Join and start your journey</li>
                  </ol>
                </div>
                <div className="rounded-lg bg-black/40 border border-white/10 p-4">
                  <h3 className="font-semibold">Bedrock Edition</h3>
                  <ol className="list-decimal list-inside text-sm text-white/80 mt-2 space-y-1">
                    <li>Open Minecraft Bedrock</li>
                    <li>Play → Servers → Add Server</li>
                    <li>IP: play.arkasmp.com • Port: 19132</li>
                    <li>Join and begin your legend</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
