import Image from "next/image";
import React from "react";
import DeleteButton from "./Buttons/DeleteButton";

const ListCard = ({ game }) => {
  const {
    gameId,
    gameName,
    developer,
    publisher,
    yearOfPublishing,
    image,
    review,
    playTimeHours,
    rating,
    price,
    category,
    tags = [],
  } = game || {};

  return (
    <div className="group relative flex items-center justify-between p-4 bg-[#121522]/90 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300">
      {/* Left Side: Image & Details */}
      <div className="flex items-center gap-4">
        {/* Next.js Image Container */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-slate-700/60 group-hover:border-cyan-500/40 transition-colors">
          <Image
            src={image}
            alt={gameName}
            fill
            sizes="80px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded-full w-fit uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {gameName}
          </h3>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-amber-400">
              <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
              {rating}
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bold text-slate-200">
              ${typeof price === "number" ? price.toFixed(2) : price}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Remove (X) Button */}
      {/* <button
        onClick={() => onRemove && onRemove(gameId)}
        aria-label="Remove from favorites"
        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 focus:outline-none border border-transparent hover:border-red-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
      <DeleteButton game={game}></DeleteButton>
    </div>
  );
};

export default ListCard;