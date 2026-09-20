import React from "react";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }) => {
  const { gameId, image, gameName, review, rating, price, category } = game;
  return (
    <div className="card image-full group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20">
      {/* Background Image Container */}
      <figure className="relative h-full w-full">
        <Image
          src={image}
          alt={gameName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      {/* Floating Rating Badge */}
      {rating && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-md border border-amber-400/30">
            ★ {rating}
          </div>
        </div>
      )}

      {/* Card Content Overlay */}
      <div className="card-body justify-end p-5 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent">
        {category && (
          <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 grow-0">
            {category}
          </p>
        )}

        <h2 className="card-title text-xl font-black text-white leading-snug">
          {gameName}
        </h2>

        {/* Action Row */}
        <div className="card-actions justify-between items-center mt-3 pt-3 border-t border-white/10">
          <span className="text-base font-extrabold text-white">
            {price !== undefined ? (price === 0 ? "Free" : `$${price}`) : ""}
          </span>

          <Link
            href={`/games/${gameId}`}
            className="btn btn-sm border-none bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-xs font-bold text-white shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
