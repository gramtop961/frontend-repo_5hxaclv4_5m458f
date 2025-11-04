import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-indigo-700">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Modern • Interactive • Fast</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              We craft delightful software experiences
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 text-lg">
              EntaLogics is a boutique software studio building high‑impact websites, apps, and platforms.
              We blend design and engineering to ship products users love.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-md hover:shadow-lg transition-all"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20 shadow-sm"
              >
                See our work
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
