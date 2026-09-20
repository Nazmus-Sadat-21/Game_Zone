import React from "react";
import Image  from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className=" relative overflow-hidden  py-12 px-6 sm:px-12 lg:px-16 text-white shadow-2xl backdrop-blur-xl">
      {/* Background Neon Ambient Glows */}
      {/* <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" /> */}
      {/* border border-slate-800/80 bg-slate-950  */}

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 max-w-7xl mx-auto">
        {/* Left Content Area */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            WELCOME TO THE GAME ZONE
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Unleash Your Next <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              Gaming Adventure
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-300">
            Dive into high-octane worlds, discover award-winning titles, and
            track your legendary journey with real-time stats and smooth
            performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/35 active:scale-95">
              <Link href="/games">Explore Games</Link>
            </button>
            <button className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800">
              View Catalog
            </button>
          </div>
        </div>

        {/* Right Image Showcase */}
        <div className="relative flex justify-center items-center">
          <div className="group relative w-full max-w-lg aspect-[16/10] overflow-hidden rounded-2xl border border-slate-700/60 shadow-2xl bg-slate-900">
            <Image
              src="/banner.jpg"
              alt="Game Zone Showcase"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
