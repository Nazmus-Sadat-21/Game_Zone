"use client";

import ListCard from "@/Components/ListCard";
import PurchesListCard from "@/Components/PurchesListCard";
import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";
const Page = () => {
  const { buy } = useContext(GameContext);
  if (buy.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500 border border-dashed rounded-xl my-6 h-full">
        <p className="text-lg font-medium">No games added yet.</p>
        <p className="text-sm text-gray-400">
          Explore games and add them to your Purches!
        </p>
      </div>
    );
  }
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col gap-4">
        {
            buy.map((game, ind) => <PurchesListCard key={ind} game={game}></PurchesListCard>)
        }
    </div>
  );
};

export default Page;
