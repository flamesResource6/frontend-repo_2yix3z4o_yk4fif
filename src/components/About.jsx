import React from 'react'

function About() {
  return (
    <section className="relative py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Hey! I'm the creator behind the handle <span className="font-semibold text-white">_0_0_unkn0wn_0_0</span>. I love technology, playful design, and creating fun online moments. This space is my simple hub so you can reach me quickly and see what I'm up to.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm currently open to collaborations, challenges, and creative ideas. If you've got something cool, tap the buttons above and say hi.
            </p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center justify-between">
                <span>WhatsApp</span>
                <a href="https://wa.me/2347067293929" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-medium">Message</a>
              </li>
              <li className="flex items-center justify-between">
                <span>TikTok</span>
                <a href="https://www.tiktok.com/@_0_0_unkn0wn_0_0_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-200 font-medium">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
