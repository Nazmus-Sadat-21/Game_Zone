import React from "react";
import GameCard from './../../Components/GameCard';

const GameData = async () => {
  const res = await fetch("http://localhost:3000/GameData.json", {
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
          Total Games: {data.length}
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((game, ind) => (
          <GameCard key={ind} game={game} />
        ))}
      </div>

    
    </section>
  );
};

export default Games;
