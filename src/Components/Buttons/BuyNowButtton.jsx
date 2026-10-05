"use client";

import { GameContext } from "@/context/GameContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const BuyNowButton = ({ game, finalAmount }) => {
  const { gameName } = game;
  const { buy, setBuy } = useContext(GameContext);
  const { isProcessing, setIsProcessing } = useContext(GameContext);
  const { isPurchased, setIsPurchased } = useContext(GameContext);

  const handleButton = () => {
    const chkGame = buy.find((e) => e.gameId == game.gameId);
    if (chkGame != null) {
      return toast.warning(`${gameName} is already exist in the purches list`);
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);

      setIsPurchased(true);
      setBuy([...buy, game]);
      toast.success(`${gameName} Purches Successfully`);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={handleButton}
        disabled={isProcessing}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            PROCESSING TRANSACTION...
          </>
        ) : (
          `CONFIRM & PAY ${finalAmount}`
        )}
      </button>
    </div>
  );
};

export default BuyNowButton;
