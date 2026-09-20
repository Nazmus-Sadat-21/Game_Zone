import React from "react";
import GameCard from "./GameCard";
import Link from "next/link";
const GameData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/GameData.json`, {
    cache: "no-store", // Prevents stale caching during development
  });

  if (!res.ok) {
    throw new Error("Failed to fetch game data");
  }

  return res.json();
};
const Games = async () => {
  const data = await GameData();
  return (
    <section className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full bg-black px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-600 border border-cyan-200/60 mb-3">
          Popular Releases
        </span>

        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
          Explore Trending{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            Games
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
          Dive into epic adventures, top-rated blockbusters, and high-octane
          multiplayer titles curated for every gamer.
        </p>
      </div>

      {/* Games Grid (Sliced to 9 for clean 3-column grid alignment) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 12).map((game, ind) => (
          <GameCard key={ind} game={game} />
        ))}
      </div>

      {/* View All Games Action Button */}
      <div className="mt-12 text-center">
        <Link
          href="/games"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/25 active:scale-95"
        >
          View All Games
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Games;
