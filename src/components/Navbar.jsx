import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/70 shadow-lg shadow-indigo-100/40 ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-rose-500 text-white shadow-md">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-slate-900">EntaLogics</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm hover:shadow-md transition-all"
              >
                Start a Project
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-slate-900/10 bg-white"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-200/60 px-6 py-3">
              <div className="flex flex-col gap-3 py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-white"
                >
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
