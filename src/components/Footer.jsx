export default function Footer() {
  return (
    <footer id="contact" className="relative mt-12 border-t border-slate-200/70 bg-white">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-900 to-fuchsia-800 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Have an idea? Let's build it together.</h3>
              <p className="mt-2 text-white/80 max-w-prose">
                Tell us about your goals and we'll propose a clear, pragmatic roadmap.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a
                href="mailto:hello@entalogics.com"
                className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-slate-900 shadow-md hover:shadow-lg"
              >
                hello@entalogics.com
              </a>
              <a
                href="#"
                className="inline-flex justify-center rounded-xl bg-transparent px-5 py-3 ring-1 ring-white/40 hover:bg-white/10"
              >
                Download deck
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} EntaLogics. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-6">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#work" className="hover:text-slate-700">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
