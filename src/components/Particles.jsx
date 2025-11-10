import { useEffect, useRef } from 'react'

// Simple canvas particle glow background
export default function Particles({ density = 60, color = 'rgba(16,185,129,0.5)' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, raf

    const dpi = window.devicePixelRatio || 1
    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpi
      canvas.height = h * dpi
      ctx.scale(dpi, dpi)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > w) p.dx *= -1
        if (p.y < 0 || p.y > h) p.dy *= -1
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        grad.addColorStop(0, color)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density, color])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}
