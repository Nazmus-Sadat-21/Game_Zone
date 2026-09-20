import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const DeleteButton = ({game}) => {
    const {gameId,gameName} = game;
    const {fav,setFav} = useContext(GameContext)
    const handleButton = ()=>{
        const newGames = fav.filter(e=>e.gameId != gameId)
        setFav([...newGames])
        toast.success(`${gameName} remove from the Favourite list`)
    }
  return (
    <div>
      <button
      type="button"
        onClick={()=>handleButton()}
        aria-label="Remove from favorites"
        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 focus:outline-none border border-transparent hover:border-red-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default DeleteButton;
