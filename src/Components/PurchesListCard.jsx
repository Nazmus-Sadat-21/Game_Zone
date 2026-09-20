import Image from "next/image";
import React from "react";
import BuyDeleteButton from "./Buttons/BuyDeleteButton";

const PurchesListCard = ({ game, onDelete }) => {
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
    <div className="w-full group relative flex items-center justify-between p-4 sm:p-5 bg-[#121522]/90 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300">
      {/* Left Side: Image & Purchase Details */}
      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
        {/* Game Thumbnail with Emerald Check Badge */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
          <Image
            src={image}
            alt={gameName || "Purchased game"}
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Verified Check Badge */}
          <div className="absolute top-1.5 left-1.5 bg-emerald-500 text-slate-950 p-1 rounded-md shadow-md">
            <svg
              className="w-3 h-3 stroke-current stroke-[3]"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Purchased
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {category}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
            {gameName}
          </h3>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 flex-wrap">
            <span className="font-semibold text-emerald-400">
              ${typeof price === "number" ? price.toFixed(2) : price}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <svg
                className="w-3.5 h-3.5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {playTimeHours ? `${playTimeHours} hrs played` : "0 hrs"}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              ★ {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Delete Button */}
      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        {/* <button
          onClick={() => onDelete && onDelete(gameId)}
          aria-label="Delete purchase history"
          className="group/btn p-2.5 sm:px-3 sm:py-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl border border-slate-800 hover:border-red-500/30 transition-all duration-200 focus:outline-none flex items-center gap-2 text-xs font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span className="hidden sm:inline">Delete</span>
        </button> */}
        <BuyDeleteButton game = {game}></BuyDeleteButton>
      </div>
    </div>
  );
};

export default PurchesListCard;