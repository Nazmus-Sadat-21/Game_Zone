import React from "react";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/Components/Buttons/BuyButton";
import FavButton from "@/Components/Buttons/FavButton";

const GameData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/GameData.json`, {
    cache: "no-store", // Prevents stale caching during development
  });

  if (!res.ok) {
    throw new Error("Failed to fetch game data");
  }

  return res.json();
};

const DetailsPage = async ({ params }) => {
  const { GameID } = await params;
  const data = await GameData();

  // Find game (safely checking gameid, gameId, or id)
  const Game = data.find(
    (e) => String(e.gameid ?? e.gameId ?? e.id) === String(GameID),
  );

  // Fallback if game is not found
  if (!Game) {
    return (
      <div className="container mx-auto my-20 px-4 text-center">
        <h2 className="text-2xl font-black text-slate-800 dark:text-white">
          Game Not Found
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          No record found for ID:{" "}
          <span className="font-semibold text-cyan-500">{GameID}</span>
        </p>
        <Link
          href="/games"
          className="btn border-none bg-slate-900 text-white mt-6 hover:bg-cyan-600 transition-colors dark:bg-slate-800"
        >
          Back to Games List
        </Link>
      </div>
    );
  }

  // Destructure with default values
  const {
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
  } = Game;

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        {/* Navigation & Category Badge */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-600 transition-colors dark:text-slate-400 dark:hover:text-cyan-400"
          >
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
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Games
          </Link>

          {category && (
            <span className="rounded-full bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-600 border border-cyan-200/60 dark:bg-cyan-950/50 dark:border-cyan-800 dark:text-cyan-400">
              {category}
            </span>
          )}
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Cover Image & Quick Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg sm:h-96">
              <Image
                src={image}
                alt={gameName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Rating Badge */}
              {rating !== undefined && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-slate-950 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {rating} / 5.0
                </div>
              )}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Playtime
                </span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  {playTimeHours ? `${playTimeHours} hrs` : "N/A"}
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Release Year
                </span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  {yearOfPublishing || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Game Info & Pricing */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">
                {gameName}
              </h1>

              {/* Developer & Publisher Meta */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                {developer && (
                  <p>
                    Developer:{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {developer}
                    </span>
                  </p>
                )}
                {developer && publisher && <span>•</span>}
                {publisher && (
                  <p>
                    Publisher:{" "}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {publisher}
                    </span>
                  </p>
                )}
              </div>

              {/* Overview / Review */}
              <div className="mt-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Overview & Review
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {review || "No review description available for this title."}
                </p>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Tags & Genres
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Price & Action Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Price
                </span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {price !== undefined
                    ? price === 0
                      ? "Free to Play"
                      : `$${price}`
                    : "N/A"}
                </span>
              </div>

              <div className="flex gap-3">
              
                  <FavButton game={Game}></FavButton>
                {/* </Link> */}

                {/* <Link href="/purches"> */}
                 
                  <BuyButton game={Game}></BuyButton>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
