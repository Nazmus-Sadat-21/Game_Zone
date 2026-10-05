"use client";
import React, { createContext, useState } from "react";

export const GameContext = createContext({
  fav: [],
  setFav: () => {},
  buy: [],
  setBuy: () => {},
  isProcessing:false,
  setIsProcessing: () => {},
  isPurchased:false,
  setIsPurchased: () => {},
});

const GameProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  const [buy, setBuy] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  return (
    <GameContext.Provider
      value={{
        fav,
        setFav,
        buy,
        setBuy,
        isProcessing,
        setIsProcessing,
        isPurchased,
        setIsPurchased,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
