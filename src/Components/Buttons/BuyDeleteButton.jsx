import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const BuyDeleteButton = ({ game }) => {
  const { gameId, gameName } = game;
  const { buy, setBuy } = useContext(GameContext);
  const handelbutton = () => {
    const newGame = buy.filter(e => e.gameId != gameId)
    setBuy([...newGame])
    toast.success(`${gameName} is removed successfully from purches list`)
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => handelbutton()}
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
      </button>
    </div>
  );
};

export default BuyDeleteButton;
