'use client'

import React, { useState } from 'react'

// ─── Main Component ───────────────────────────────────────────────────────────

const CtaBanner: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: conectar con tu lógica de newsletter
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 420 }}>
      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')",
        }}
      />

      {/* ── Dark overlay — heavier on sides, lighter center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Heading */}
        <h2 className="text-white font-light text-3xl sm:text-4xl lg:text-6xl leading-tight max-w-3xl mb-10">
          Optimize your
          <br />
          human capital.
        </h2>

        {/* Pill form */}
        <form
          onSubmit={handleSubmit}
          className={`
            flex items-center w-full max-w-xl
            bg-white rounded-full overflow-hidden
            transition-all duration-300
            ${focused ? 'shadow-[0_0_0_3px_rgba(34,197,94,0.45)]' : 'shadow-lg'}
          `}
        >
          {/* Email input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Book Architectural Review"
            aria-label="Tu correo electrónico"
            className="
              flex-1 px-6 py-4 text-sm text-gray-700 placeholder-gray-500
              bg-transparent outline-none min-w-0
            "
          />

          {/* Submit button */}
          <button
            type="submit"
            className="
              flex-shrink-0 m-1 px-7 py-3.5
              bg-green-600 hover:bg-green-700 active:bg-green-800
              text-white text-sm font-light rounded-full
              transition-all duration-200
              hover:shadow-[0_4px_18px_rgba(22,163,74,0.55)]
              hover:scale-[1.03] active:scale-100
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-white
            "
          >
            {submitted ? (
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ¡Listo!
              </span>
            ) : (
              'Join Network'
            )}
          </button>
        </form>

        {/* Micro-copy */}
        {submitted && (
          <p className="mt-4 text-green-300 text-sm animate-fade-up">
            Te hemos agregado a nuestra red. ¡Bienvenido!
          </p>
        )}
      </div>
    </section>
  )
}

export default CtaBanner
