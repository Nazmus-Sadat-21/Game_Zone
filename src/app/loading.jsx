import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md text-white">
      {/* Background Neon Glow Effects */}
      <div className="absolute h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="absolute h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse delay-500" />

      {/* Central Spinner & Controller Icon */}
      <div className="relative flex items-center justify-center">
        {/* Outer Dual-Glow Spinner Ring */}
        <div className="h-24 w-24 rounded-full border-4 border-slate-800 border-t-cyan-400 border-r-fuchsia-500 animate-spin" />

        {/* Pulsing Gamepad Icon */}
        <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-cyan-400 animate-pulse"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 6H7c-2.76 0-5 2.24-5 5v2c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-2c0-2.76-2.24-5-5-5zm-8 7H7v2H5v-2H3v-2h2V9h2v2h2v2zm6 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </div>
      </div>

      {/* Branding & Loading Text */}
      <div className="mt-8 text-center space-y-2">
        <h2 className="text-xl font-black tracking-widest text-white">
          GAME
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            ZONE
          </span>
        </h2>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Loading world</span>
          <span className="loading loading-dots loading-xs text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default loading;
