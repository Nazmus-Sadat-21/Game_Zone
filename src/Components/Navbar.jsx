"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  // Get user initial for avatar badge
  const userInitial = session?.user?.name
    ? session.user.name.trim()[0].toUpperCase()
    : "U";

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md text-slate-100 shadow-lg shadow-cyan-500/5">
      <div className="navbar max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start flex items-center gap-1 sm:gap-2 w-auto">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle btn-sm sm:btn-md lg:hidden hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 focus:outline-none"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
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
              className="menu menu-md dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-xl rounded-2xl w-52 space-y-1 text-slate-200"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 hover:bg-slate-800/60 py-2.5 rounded-xl font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="hover:text-cyan-400 hover:bg-slate-800/60 py-2.5 rounded-xl font-medium"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/favourites"
                  className="hover:text-cyan-400 hover:bg-slate-800/60 py-2.5 rounded-xl font-medium"
                >
                  Favourites
                </Link>
              </li>
              <li>
                <Link
                  href="/purches"
                  className="hover:text-cyan-400 hover:bg-slate-800/60 py-2.5 rounded-xl font-medium"
                >
                  Purchases
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 p-1 shadow-md shadow-cyan-500/10 group-hover:border-cyan-500/50">
              <Image
                src="/logo.jpg"
                alt="Game Zone Logo"
                width={30}
                height={30}
                className="rounded-lg object-cover w-7 h-7 sm:w-9 sm:h-9"
              />
            </div>
            <span className="text-base sm:text-2xl font-black tracking-wider text-white">
              GAME
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
                ZONE
              </span>
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-sm font-semibold tracking-wide text-slate-300">
            <li>
              <Link
                href="/"
                className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all"
              >
                Favourites
              </Link>
            </li>
            <li>
              <Link
                href="/purches"
                className="hover:text-cyan-400 hover:bg-slate-900 focus:text-cyan-400 rounded-xl px-4 py-2 transition-all"
              >
                Purchases
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End: User Profile or Sign In CTA */}
        <div className="navbar-end flex items-center gap-2 sm:gap-3 w-auto">
          {session?.user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Glass User Badge: Phone = Avatar ring only, Tablet/Desktop = Pill with Name */}
              <Link href={"/profile"}>
                <div className="cursor-pointer flex items-center gap-2 rounded-full border-0 sm:border sm:border-cyan-500/20 bg-transparent sm:bg-slate-900/60 p-0 sm:px-3 sm:py-1.5 backdrop-blur-md sm:shadow-sm sm:shadow-cyan-500/10">
                  {session?.user.image ? (
                    // ******************** EYE-CATCHING IMAGE SECTION ********************
                    // A relative container for complex layering and glows
                    <div className="relative group/avatar h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 hover:scale-110">
                      <div className="absolute inset-0 rounded-full border-[3px] border-cyan-400 p-0.5 shadow-[0_0_20px_rgba(6,182,212,0.8),_0_0_4px_rgba(255,255,255,0.4)]">
                        {/* 2. Optimized, High-Resolution Avatar Image */}
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User Avatar"}
                          // Use 'fill' inside a relative container for perfect scaling
                          fill
                          className="h-full w-full rounded-full object-cover border-2 border-black/50"
                          priority // Prioritize loading as it's a critical navigation element
                        />
                      </div>

                      {/* 3. Outer Fuchsia Neon Pulse Ring (Hidden by default, shown on group hover) */}
                      <div className="absolute inset-[-4px] rounded-full ring-2 ring-fuchsia-600/80 ring-offset-2 ring-offset-black/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300"></div>

                      {/* 4. Tiny "Active Status" Indicator - Green Neon dot */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    </div>
                  ) : (
                    // ********************************************************************
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-fuchsia-600 text-xs sm:text-sm font-bold text-white shadow-md shadow-cyan-500/20 ring-2 ring-cyan-500/40 sm:ring-0 shrink-0">
                      {userInitial}
                    </div>
                  )}

                  {/* Welcome Subtitle & Name (Hidden on phone `< sm`, shown on `sm:flex`) */}
                  <div className="hidden sm:flex flex-col text-left leading-tight">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                      Welcome
                    </span>
                    <span className="max-w-[120px] truncate text-xs sm:text-sm font-semibold text-slate-100">
                      {session?.user.name}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Sign Out Action Button */}
              <Link href={"/SignIn"}>
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer rounded-xl border border-slate-700/60 bg-slate-900/80 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95 shrink-0"
                >
                  Sign Out
                </button>
              </Link>
            </div>
          ) : (
            <Link
              href="/SignIn"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/30 active:scale-95"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
