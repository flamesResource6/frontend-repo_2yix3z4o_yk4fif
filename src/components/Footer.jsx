import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} _0_0_unkn0wn_0_0 • Built with love and good vibes
        </p>
      </div>
    </footer>
  )
}

export default Footer
