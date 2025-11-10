import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function ServerInfo() {
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backend}/server/status`)
        const data = await res.json()
        setStatus(data)
      } catch (e) {
        setStatus({ online: false, error: 'Unable to reach server status' })
      }
    }
    load()
  }, [])

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold">Server Info</h1>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-sm text-emerald-300 font-semibold">Server IP</p>
              <p className="text-2xl font-mono">play.arkasmp.net</p>
              <p className="text-white/60 text-sm mt-2">Versions: 1.20 - 1.21 | Java & Bedrock</p>

              <div className="mt-6">
                <p className="text-sm text-emerald-300 font-semibold">Status</p>
                {status ? (
                  <p className="mt-1 text-lg">{status.online ? 'Online' : 'Offline'} {status.player_count != null && `• ${status.player_count}/${status.max_players}`}</p>
                ) : (
                  <p className="mt-1 text-white/70">Loading...</p>
                )}
                {status?.motd && <p className="text-white/70 text-sm mt-1">{status.motd}</p>}
              </div>
            </div>

            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-xl font-semibold">How to Join</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Java Edition</p>
                  <ol className="list-decimal list-inside text-white/80 space-y-1 mt-1">
                    <li>Open Minecraft Java 1.20+</li>
                    <li>Multiplayer → Add Server</li>
                    <li>Server Name: ARKA SMP</li>
                    <li>Server Address: play.arkasmp.net</li>
                    <li>Join and start your journey!</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold">Bedrock Edition</p>
                  <ol className="list-decimal list-inside text-white/80 space-y-1 mt-1">
                    <li>Open Minecraft Bedrock</li>
                    <li>Play → Servers → Add Server</li>
                    <li>Server Name: ARKA SMP</li>
                    <li>Address: play.arkasmp.net • Port: 19132</li>
                    <li>Save and join</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="text-xl font-semibold">Leaderboard</h3>
            <p className="text-white/70 text-sm mt-2">Coming soon — top balances, quest points, and events champions.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
