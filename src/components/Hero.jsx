import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-200/90 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
              _0_0_unkn0wn_0_0
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
              A playful, vibrant personal space on the web. Connect with me on WhatsApp and TikTok — and enjoy the floating social vibes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2347067293929"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://www.tiktok.com/@_0_0_unkn0wn_0_0_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black/70 hover:bg-black text-white font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                <span>View TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
