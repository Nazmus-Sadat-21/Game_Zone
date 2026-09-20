"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const BuyButton = ({ game }) => {
  const { gameName } = game;
  const { buy, setBuy } = useContext(GameContext);
  const handleButton = () => {
    const chkGame = buy.find((e) => e.gameId == game.gameId);
    if (chkGame != null) {
      return toast.warning(`${gameName} is already exist in the purches list`);
    }
    setBuy([...buy, game]);
    toast.success(`${gameName} Purches Successfully`);
  };
  return (
    <div>
      <button
        onClick={() => handleButton()}
        className="btn border-none bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform flex-1 sm:flex-initial"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyButton;
