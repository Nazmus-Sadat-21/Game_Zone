import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md text-slate-100 shadow-lg shadow-cyan-500/5">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden hover:bg-slate-800 text-slate-300 hover:text-cyan-400"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
            
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-slate-900 border border-slate-800 rounded-2xl w-56 space-y-1 text-slate-200"
            >
              <li>
                <Link href="/" className="hover:text-cyan-400 hover:bg-slate-800/80 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-cyan-400 hover:bg-slate-800/80 py-2">
                  Games
                </Link>
              </li>
             
             
              <li>
                <Link href="/favourites" className="hover:text-cyan-400 hover:bg-slate-800/80 py-2">
                  Favourites
                </Link>
              </li>
              <li>
                <Link href="/purches" className="hover:text-cyan-400 hover:bg-slate-800/80 py-2">
                  Purches
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900 p-1 shadow-md shadow-cyan-500/10 group-hover:border-cyan-500/50">
              <Image
                src="/logo.jpg"
                alt="Game Zone Logo"
                width={36}
                height={36}
                className="rounded-lg object-cover"
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
              GAME<span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">ZONE</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-sm font-semibold tracking-wide text-slate-300">
            <li>
              <Link href="/" className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/games" className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all">
                Games
              </Link>
            </li>
           
            <li>
              <Link href="/favourites" className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all">
                Favourites
              </Link>
            </li>
            <li>
              <Link href="/purches" className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all">
                Purches
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End: Search & CTA Action Button */}
        <div className="navbar-end gap-3">
          
          {/* Join / Sign In Button */}
          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/30 active:scale-95"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}