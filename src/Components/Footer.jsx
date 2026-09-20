import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Ambient Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand & Logo Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl border border-slate-700/80 p-1 bg-slate-900 shadow-md shadow-cyan-500/10">
                <Image
                  src="/logo.jpg"
                  alt="Game Zone Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-wider text-white">
                GAME<span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">ZONE</span>
              </span>
            </div>

            <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
              Your ultimate destination for next-gen gaming reviews, esports coverage, and high-performance gaming gear. Level up your journey today.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z"/></svg>
              </Link>
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-fuchsia-500 hover:text-fuchsia-400 hover:shadow-md hover:shadow-fuchsia-500/20">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/20">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </div>
          </div>

          {/* Navigation Column 1: Explore */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Explore</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Trending Games</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">New Releases</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Esports & News</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Game Reviews</Link></li>
            </ul>
          </div>

          {/* Navigation Column 2: Platforms */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Platforms</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-fuchsia-400 transition-colors">PlayStation 5</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-400 transition-colors">Xbox Series X</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-400 transition-colors">PC Gaming</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-400 transition-colors">Nintendo Switch</Link></li>
            </ul>
          </div>

          {/* Navigation Column 3: Legal & Support */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-widest text-slate-400">Legal & Support</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Preferences</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Game Zone Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Powered by Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}