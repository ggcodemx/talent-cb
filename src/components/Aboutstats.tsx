'use client'

import React, { useEffect, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Stat {
  number: string // e.g. "75+" — se separa el prefijo/sufijo del valor numérico
  label: string
}

export interface AboutStatsProps {
  title: string
  description: string
  stats: Stat[]
}

// ─── Animated Number Hook ─────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

// ─── Stat Item ────────────────────────────────────────────────────────────────

const StatItem: React.FC<{ stat: Stat; started: boolean }> = ({ stat, started }) => {
  // Separa la parte numérica del sufijo (e.g. "75+" → 75, "+")
  const match = stat.number.match(/^(\d+)(.*)$/)
  const numericValue = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : stat.number

  const count = useCountUp(numericValue, 1800, started)

  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
      <span className="text-white font-light text-6xl lg:text-5xl leading-none tracking-tight">
        {started ? count : 0}
        {suffix}
      </span>
      <span className="mt-3 text-white/90 text-sm font-normal tracking-wide">{stat.label}</span>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const AboutStats: React.FC<AboutStatsProps> = ({ title, description, stats }) => {
  const statsRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  // Trigger animation when the stats block enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-green-700 font-light text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>
        <br />

        {/* Description */}
        <p className="mt-8 text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
        <br />

        {/* Stats banner */}
        <div
          ref={statsRef}
          className="
            mt-12 rounded-2xl bg-secondary
            grid grid-cols-1 sm:grid-cols-3
           
            py-0
          "
        >
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
