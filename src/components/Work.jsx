import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'NeoCommerce',
    tag: 'E‑commerce Platform',
    desc: 'Headless storefront with blazing performance and beautiful UX.',
    gradient: 'from-indigo-500 via-fuchsia-500 to-rose-500',
  },
  {
    title: 'Atlas CRM',
    tag: 'B2B SaaS',
    desc: 'Insightful dashboards and workflows for growing sales teams.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    title: 'Pulse Health',
    tag: 'Healthcare App',
    desc: 'Secure patient portal with realtime updates and accessibility first.',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
          <p className="mt-3 text-slate-600">A few examples that showcase our range and craft.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/10 shadow-sm hover:shadow-xl transition-all">
              <div className={`h-40 w-full bg-gradient-to-tr ${p.gradient}`} />
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{p.tag}</span>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                  View case study <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
