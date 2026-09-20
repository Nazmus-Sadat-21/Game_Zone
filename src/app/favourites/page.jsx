"use client";

import ListCard from "@/Components/ListCard";
import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";

const Page = () => {
  // Destructure fav and your remove function (or setFav) from GameContext
  const { fav} = useContext(GameContext);

  // Fallback state if favorites list is empty
  if (!fav || fav.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500 border border-dashed rounded-xl my-6 h-full">
        <p className="text-lg font-medium">No favorite games added yet.</p>
        <p className="text-sm text-gray-400">Explore games and add them to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col gap-4">
      {fav.map((game) => (
        <ListCard
          key={game.gameId || game.gameName}
          game={game}
         
        />
      ))}
    </div>
  );
};

export default Page;