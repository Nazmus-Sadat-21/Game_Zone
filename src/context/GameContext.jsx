"use client"
import React, { createContext, useState } from 'react';

export const GameContext = createContext({
    fav: [],
    setFav: () => {},
    buy: [],
    setBuy: () => {}
});

const GameProvider = ({ children }) => {
    const [fav, setFav] = useState([]);
    const [buy, setBuy] = useState([]);

    return (
        <GameContext.Provider value={{ fav, setFav, buy, setBuy }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;