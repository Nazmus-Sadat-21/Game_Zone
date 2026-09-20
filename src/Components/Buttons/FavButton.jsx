"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const FavButton = ({ game }) => {
  const { gameName } = game;
  const { fav, setFav } = useContext(GameContext);
  const handleButton = () => {
    const chkGame = fav.find((e) => e.gameId == game.gameId);
    if (chkGame != null) {
      return toast.warning(
        `${gameName} is already exist in the favourite list`,
      );
    }
    setFav([...fav, game]);
    toast.success(`${gameName} is added to Favourite list`);
  };
  return (
    <div>
      <button
        onClick={() => handleButton()}
        className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 flex-1 sm:flex-initial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-1.364-6.364 4.5 4.5 0 00-6.364 0L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Favourites
      </button>
    </div>
  );
};

export default FavButton;
