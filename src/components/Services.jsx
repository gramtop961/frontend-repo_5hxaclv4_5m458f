import { Code2, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Strategy',
    desc: 'Discovery, roadmapping, and rapid prototyping to validate ideas and reduce risk.',
  },
  {
    icon: Code2,
    title: 'Web & App Development',
    desc: 'Robust, scalable frontends and APIs with modern stacks and best practices.',
  },
  {
    icon: Shield,
    title: 'Quality & Performance',
    desc: 'Automated testing, accessibility, and performance optimization baked in.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-indigo-50/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">
            From concept to launch, we partner with teams to ship delightful, resilient software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 transition-all group-hover:w-24 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
