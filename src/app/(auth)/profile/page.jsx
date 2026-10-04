"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; // Adjust path if auth-client is in another directory

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  // Component States
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  // Enter edit mode & populate state on click (eliminates need for useEffect)
  const handleStartEditing = () => {
    setName(session?.user?.name || "");
    setImage(session?.user?.image || "");
    setStatusMsg({ type: "", text: "" });
    setIsEditing(true);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const res = await authClient.updateUser({
        name,
        image,
      });

      if (res?.error) {
        setStatusMsg({
          type: "error",
          text: res.error.message || "FAILED TO UPDATE PROFILE CORE.",
        });
      } else {
        setStatusMsg({
          type: "success",
          text: "PROFILE DATA CORE UPDATED SUCCESSFULLY.",
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.error("Update profile error:", err);
      setStatusMsg({
        type: "error",
        text: "SYSTEM ERROR: UNABLE TO SAVE CHANGES.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 1. Loading State
  if (isPending) {
    return (
      <div className="min-h-screen bg-[#070913] flex items-center justify-center text-cyan-400">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 animate-pulse">
            INITIALIZING DATA CORE...
          </p>
        </div>
      </div>
    );
  }



  const user = session.user;
  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "G";
  const displayAvatar = isEditing ? image : user.image;

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative overflow-hidden font-sans">
      {/* Cyber Grid & Ambient Lighting Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Holographic Card Frame */}
      <div className="relative max-w-lg w-full">
        {/* Glow Ring Underlay */}
        <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-70 blur-md"></div>

        <div className="relative rounded-[2.3rem] bg-[#0d121f]/95 border border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden">
          {/* Cyber Corner Markers */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-fuchsia-400"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-fuchsia-400"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

          {/* Header Badge */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
            <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]"></span>
              PERSONAL DATA CORE v3.1
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {isEditing ? "EDIT MODE" : "ACTIVE"}
            </span>
          </div>

          {/* Glowing User Avatar Circle */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              {/* Outer Cyan/Fuchsia Neon Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-fuchsia-500 opacity-90 blur-xs"></div>

              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-950 p-1 border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] overflow-hidden">
                {displayAvatar ? (
                  <Image
                    src={displayAvatar}
                    alt={user.name || "User Avatar"}
                    fill
                    className="rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-fuchsia-600 flex items-center justify-center text-4xl font-black text-white tracking-widest shadow-inner">
                    {userInitial}
                  </div>
                )}
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0d121f] shadow-[0_0_10px_#10b981]"></div>
            </div>

            {!isEditing && (
              <h1 className="mt-5 text-2xl sm:text-3xl font-black text-white tracking-wider uppercase text-center drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                {user.name || "PLAYER 01"}
              </h1>
            )}
          </div>

          {/* Status Alert Banner */}
          {statusMsg.text && (
            <div
              className={`mb-6 p-3.5 rounded-2xl text-xs font-mono font-semibold border backdrop-blur-md transition-all ${
                statusMsg.type === "error"
                  ? "bg-rose-950/40 border-rose-500/50 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]"
                  : "bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              }`}
            >
              {statusMsg.text}
            </div>
          )}

          {/* View Mode */}
          {!isEditing ? (
            <div className="space-y-5">
              <div className="space-y-3">
                {/* Name Box */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-cyan-500/20 backdrop-blur-md flex items-center gap-3 shadow-[inset_0_0_15px_rgba(6,182,212,0.05)]">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      PLAYER ID
                    </span>
                    <span className="text-sm font-bold text-white tracking-wide truncate block">
                      {user.name || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Email Box */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-fuchsia-500/20 backdrop-blur-md flex items-center gap-3 shadow-[inset_0_0_15px_rgba(217,70,239,0.05)]">
                  <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      AUTHENTICATED EMAIL
                    </span>
                    <span className="text-sm font-bold text-cyan-300 font-mono truncate block">
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>



              {/* Edit Trigger Button */}
              <button
                onClick={handleStartEditing}
                className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                EDIT PROFILE CORE
              </button>
            </div>
          ) : (
            /* Edit Form Mode */
            <form onSubmit={handleUpdateProfile} className="space-y-5">
              {/* Name Input Field */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  PLAYER DISPLAY NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter player name"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-cyan-500/40 text-white font-semibold placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all"
                />
              </div>

              {/* Avatar URL Field */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-fuchsia-400 mb-2">
                  AVATAR IMAGE URL
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/avatar.png"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-fuchsia-500/40 text-white font-mono text-xs placeholder-slate-600 focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/30 shadow-[0_0_15px_rgba(217,70,239,0.1)] transition-all"
                />
                <p className="text-[10px] text-slate-500 font-mono mt-1.5">
                  PASTE A DIRECT IMAGE URL FOR LIVE CORE PREVIEW ABOVE.
                </p>
              </div>

              {/* Form Action Controls */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all"
                >
                  {loading ? "SAVING..." : "SAVE CHANGES"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setStatusMsg({ type: "", text: "" });
                  }}
                  className="py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
