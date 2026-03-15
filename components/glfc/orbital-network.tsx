"use client"

import { useEffect, useRef, useState } from "react"

const CARGO_MIX = [
  { name: "Manufactured", share: 60, color: "#f06402", angle: 0 },
  { name: "Agricultural", share: 20, color: "#34D399", angle: 90 },
  { name: "Bulk",         share: 10, color: "#60A5FA", angle: 180 },
  { name: "Other",        share: 10, color: "#A78BFA", angle: 270 },
]

const COUNTRIES = [
  { country: "Nigeria",     share: 20, color: "#EF4444", angle: 0 },
  { country: "Kenya",       share: 18, color: "#14B8A6", angle: 51 },
  { country: "Mozambique",  share: 16, color: "#F59E0B", angle: 103 },
  { country: "Tanzania",    share: 14, color: "#06B6D4", angle: 154 },
  { country: "Zambia",      share: 12, color: "#8B5CF6", angle: 206 },
  { country: "Other",       share: 12, color: "#9CA3AF", angle: 257 },
  { country: "Zanzibar",    share:  8, color: "#EC4899", angle: 309 },
]

interface TooltipData {
  name: string
  share: number
  color: string
  x: number
  y: number
}

function useAnimationFrame(callback: (t: number) => void) {
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)
  useEffect(() => {
    const loop = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      callback(ts - startRef.current)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [callback])
}

function polarToCart(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

interface Particle {
  id: number
  orbitIndex: number
  layer: 1 | 2
  progress: number
  speed: number
  color: string
}

let pid = 0

export function OrbitalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  const [dims, setDims] = useState({ w: 480, h: 480 })
  const particlesRef = useRef<Particle[]>([])
  const timeRef = useRef(0)

  // Responsive sizing
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth
        setDims({ w, h: w })
      }
    }
    update()
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Seed particles
  useEffect(() => {
    const particles: Particle[] = []
    for (let i = 0; i < 120; i++) {
      const layer = (i % 2 === 0 ? 1 : 2) as 1 | 2
      const arr = layer === 1 ? CARGO_MIX : COUNTRIES
      const orbitIndex = i % arr.length
      particles.push({
        id: pid++,
        orbitIndex,
        layer,
        progress: Math.random(),
        speed: 0.00008 + Math.random() * 0.00012,
        color: arr[orbitIndex].color,
      })
    }
    particlesRef.current = particles
  }, [])

  useAnimationFrame((t) => {
    timeRef.current = t
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { w, h } = dims
    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.scale(dpr, dpr)

    const cx = w / 2
    const cy = h / 2
    const minDim = Math.min(w, h)
    const r1 = minDim * 0.22
    const r2 = minDim * 0.38

    // Background
    ctx.fillStyle = "#0a0a0a"
    ctx.fillRect(0, 0, w, h)

    // Starfield
    ctx.save()
    for (let i = 0; i < 80; i++) {
      const sx = ((i * 137.508 * w) % w)
      const sy = ((i * 97.3 * h) % h)
      const alpha = 0.15 + 0.1 * Math.sin(t * 0.001 + i)
      ctx.beginPath()
      ctx.arc(sx, sy, 0.7, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.fill()
    }
    ctx.restore()

    // Orbit paths
    const drawOrbit = (r: number, color: string) => {
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5
      ctx.setLineDash([3, 6])
      ctx.stroke()
      ctx.setLineDash([])
    }
    drawOrbit(r1, "rgba(255,255,255,0.1)")
    drawOrbit(r2, "rgba(255,255,255,0.07)")

    // Draw particles
    particlesRef.current.forEach((p) => {
      p.progress = (p.progress + p.speed) % 1
      const angleDeg = p.progress * 360
      const r = p.layer === 1 ? r1 : r2
      const { x, y } = polarToCart(cx, cy, r, angleDeg)
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.shadowColor = p.color
      ctx.shadowBlur = 4
      ctx.fill()
      ctx.shadowBlur = 0
    })

    // Layer 1 nodes — cargo mix
    const rot1 = (t * 0.012) % 360
    CARGO_MIX.forEach((n) => {
      const angle = n.angle + rot1
      const { x, y } = polarToCart(cx, cy, r1, angle)
      const radius = 4 + (n.share / 60) * 8
      const pulse = 1 + 0.12 * Math.sin(t * 0.002 + n.angle)

      // Glow
      const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * 3 * pulse)
      grd.addColorStop(0, n.color + "88")
      grd.addColorStop(1, "transparent")
      ctx.beginPath()
      ctx.arc(x, y, radius * 3 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      // Node
      ctx.beginPath()
      ctx.arc(x, y, radius * pulse, 0, Math.PI * 2)
      ctx.fillStyle = n.color
      ctx.shadowColor = n.color
      ctx.shadowBlur = 12
      ctx.fill()
      ctx.shadowBlur = 0
    })

    // Layer 2 nodes — countries
    const rot2 = -(t * 0.007) % 360
    COUNTRIES.forEach((n) => {
      const angle = n.angle + rot2
      const { x, y } = polarToCart(cx, cy, r2, angle)
      const radius = 3 + (n.share / 20) * 7
      const pulse = 1 + 0.1 * Math.sin(t * 0.0015 + n.angle)

      const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * 3 * pulse)
      grd.addColorStop(0, n.color + "66")
      grd.addColorStop(1, "transparent")
      ctx.beginPath()
      ctx.arc(x, y, radius * 3 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      ctx.beginPath()
      ctx.arc(x, y, radius * pulse, 0, Math.PI * 2)
      ctx.fillStyle = n.color
      ctx.shadowColor = n.color
      ctx.shadowBlur = 10
      ctx.fill()
      ctx.shadowBlur = 0
    })

    // Central hub
    const hubPulse = 1 + 0.06 * Math.sin(t * 0.001)
    const hubR = minDim * 0.07 * hubPulse

    // Hub glow
    const hubGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR * 2.5)
    hubGrd.addColorStop(0, "rgba(240,100,2,0.35)")
    hubGrd.addColorStop(1, "transparent")
    ctx.beginPath()
    ctx.arc(cx, cy, hubR * 2.5, 0, Math.PI * 2)
    ctx.fillStyle = hubGrd
    ctx.fill()

    // Rotating halo ring
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate((t * 0.0008) % (Math.PI * 2))
    ctx.beginPath()
    ctx.arc(0, 0, hubR * 1.3, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(240,100,2,0.4)"
    ctx.lineWidth = 1
    ctx.setLineDash([4, 8])
    ctx.stroke()
    ctx.setLineDash([])
    ctx.restore()

    // Hub fill
    ctx.beginPath()
    ctx.arc(cx, cy, hubR, 0, Math.PI * 2)
    ctx.fillStyle = "#1a1a1a"
    ctx.strokeStyle = "rgba(240,100,2,0.8)"
    ctx.lineWidth = 1.5
    ctx.shadowColor = "#f06402"
    ctx.shadowBlur = 16
    ctx.fill()
    ctx.stroke()
    ctx.shadowBlur = 0

    // Hub label
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = `bold ${minDim * 0.028}px Inter, sans-serif`
    ctx.fillStyle = "#f06402"
    ctx.fillText("GLFC", cx, cy - minDim * 0.012)
    ctx.font = `${minDim * 0.019}px Inter, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.5)"
    ctx.fillText("Network", cx, cy + minDim * 0.018)
  })

  // Mouse interaction for tooltip
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const { w, h } = dims
    const cx = w / 2
    const cy = h / 2
    const minDim = Math.min(w, h)
    const r1 = minDim * 0.22
    const r2 = minDim * 0.38
    const t = timeRef.current

    // Check layer 1
    const rot1 = (t * 0.012) % 360
    for (const n of CARGO_MIX) {
      const angle = n.angle + rot1
      const { x, y } = polarToCart(cx, cy, r1, angle)
      const radius = 4 + (n.share / 60) * 8
      const dist = Math.hypot(mx - x, my - y)
      if (dist < radius + 12) {
        setTooltip({ name: n.name, share: n.share, color: n.color, x: e.clientX, y: e.clientY })
        return
      }
    }

    // Check layer 2
    const rot2 = -(t * 0.007) % 360
    for (const n of COUNTRIES) {
      const angle = n.angle + rot2
      const { x, y } = polarToCart(cx, cy, r2, angle)
      const radius = 3 + (n.share / 20) * 7
      const dist = Math.hypot(mx - x, my - y)
      if (dist < radius + 12) {
        setTooltip({ name: n.country, share: n.share, color: n.color, x: e.clientX, y: e.clientY })
        return
      }
    }

    setTooltip(null)
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-square">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
        className="w-full h-full cursor-crosshair"
        aria-label="GLFC logistics orbital network visualization"
        role="img"
      />
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-2 rounded text-xs font-sans"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 10,
            background: "rgba(10,10,10,0.95)",
            border: `1px solid ${tooltip.color}`,
            boxShadow: `0 0 12px ${tooltip.color}44`,
            color: "#fff",
            minWidth: "120px",
          }}
        >
          <div className="font-semibold" style={{ color: tooltip.color }}>{tooltip.name}</div>
          <div className="text-white/60 mt-0.5">{tooltip.share}% of operations</div>
        </div>
      )}
    </div>
  )
}
