"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { GameContext } from "@/context/GameContext";

import BuyNowButton from "./Buttons/BuyNowButtton";

const BuyNowCard = ({ game }) => {
  // Destructure with default fallbacks to prevent runtime crashes
  const {
    gameName = "Untitled Game",
    developer,
    publisher,
    yearOfPublishing,
    image,
    review,
    playTimeHours,
    rating,
    price = 0,
    category = "Digital Game",
    tags = [],
    edition = "Standard Edition",
  } = game || {};

  const { data: session, isPending } = authClient.useSession();

  // Safe Price Parsing & Tag Handling
  const numericPrice =
    typeof price === "number" ? price : parseFloat(price) || 0;
  const safeTags = Array.isArray(tags) ? tags : [];

  // Checkout State
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");
  // const { isProcessing, setIsProcessing }= useContext(GameContext);
  const { isPurchased, setIsPurchased } = useContext(GameContext);
  const [copiedKey, setCopiedKey] = useState(false);

  const generatedKey = "GZ99-X782-NEON-2077";

  // Promo Code Handler
  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError("");

    if (!promoCode.trim()) return;

    const cleanedCode = promoCode.trim().toUpperCase();

    if (cleanedCode === "GZ20") {
      setAppliedPromo({ code: "GZ20", discount: 12.0 });
    } else if (cleanedCode === "CYBER50") {
      setAppliedPromo({ code: "CYBER50", discount: 29.99 });
    } else {
      setPromoError("INVALID PROMO CODE. TRY 'GZ20' FOR $12 OFF.");
    }
  };

  const handleCopyKey = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(generatedKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    }
  };

  const discountAmount = appliedPromo ? appliedPromo.discount : 0;
  const finalTotal = Math.max(0, numericPrice - discountAmount).toFixed(2);

  // Guard if game object is completely missing
  if (!game && !isPending) {
    return (
      <div className="min-h-screen bg-[#070913] flex items-center justify-center text-rose-400 font-mono">
        <p>ERROR: NO GAME DATA PROVIDED.</p>
      </div>
    );
  }

  // 1. Session Loading State
  if (isPending) {
    return (
      <div className="min-h-screen bg-[#070913] flex items-center justify-center text-cyan-400 font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
          <p className="text-xs tracking-[0.3em] uppercase animate-pulse">
            INITIALIZING SECURE CHECKOUT...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Cyber Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
          <Link
            href={`/BuyNow/${game.gameId}`}
            onClick={() => setIsPurchased(false)}
            className="text-xs font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-all hover:-translate-x-1 w-fit"
          >
            ← RETURN TO GAME STORE
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest uppercase w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            256-BIT ENCRYPTED TRANSACTIONS
          </div>
        </div>

        {/* ORDER COMPLETED VIEW */}
        {isPurchased ? (
          <div className="max-w-xl mx-auto my-8 sm:my-12 relative">
            <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-80 blur-md"></div>
            <div className="relative bg-[#0d121f]/95 border border-emerald-500/40 rounded-[2.3rem] p-6 sm:p-10 backdrop-blur-2xl text-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-5 text-emerald-400 text-3xl font-black shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                ✓
              </div>

              <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase block mb-1">
                TRANSACTION COMPLETE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wider uppercase mb-2">
                PURCHASE SUCCESSFUL
              </h2>
              <p className="text-slate-400 text-xs font-mono mb-6">
                YOUR DIGITAL LICENSE KEY IS READY FOR ACTIVATION ON STEAM.
              </p>

              {/* Redeemable Digital Key Container */}
              <div className="bg-slate-950/90 p-4 rounded-2xl border border-cyan-500/40 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]">
                <div className="text-left">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">
                    STEAM GAME KEY
                  </span>
                  <span className="font-mono text-cyan-300 font-bold tracking-widest text-base sm:text-lg select-all">
                    {generatedKey}
                  </span>
                </div>
                <button
                  onClick={handleCopyKey}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider transition-all active:scale-95 shrink-0"
                >
                  {copiedKey ? "✓ COPIED!" : "COPY KEY"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  onClick={() => setIsPurchased(false)}
                  href="/purches"
                  className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center"
                >
                  VIEW IN DATA CORE
                </Link>
                <Link
                  onClick={() => setIsPurchased(false)}
                  href="/"
                  className="py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center justify-center"
                >
                  BROWSE MORE GAMES
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* MAIN CHECKOUT GRID */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* LEFT SIDE: SUMMARY & PAYMENT SELECTION */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Item Order Card */}
              <div className="relative rounded-[2rem] bg-[#0d121f]/90 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden">
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400"></div>

                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    01. ORDER SUMMARY
                  </h2>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    INSTANT DELIVERY
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  {/* Game Cover Image */}
                  <div className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-2xl overflow-hidden border border-cyan-500/30 shrink-0 bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {image ? (
                      <Image
                        src={image}
                        alt={gameName}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-[10px]">
                        NO IMAGE
                      </div>
                    )}
                  </div>

                  {/* Game Meta */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                        {category}
                      </span>
                      {safeTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      {gameName}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {edition}
                    </p>

                    {/* Additional Prop Indicators: Developer, Publisher, Rating, Hours */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-slate-400 pt-1">
                      {(developer || publisher) && (
                        <div>
                          <span className="text-slate-500">DEV/PUB: </span>
                          <span className="text-slate-300">
                            {developer || publisher}
                          </span>
                        </div>
                      )}
                      {yearOfPublishing && (
                        <div>
                          <span className="text-slate-500">YEAR: </span>
                          <span className="text-slate-300">
                            {yearOfPublishing}
                          </span>
                        </div>
                      )}
                      {rating && (
                        <div>
                          <span className="text-amber-400 font-bold">
                            ★ {rating}
                          </span>
                        </div>
                      )}
                      {playTimeHours && (
                        <div>
                          <span className="text-slate-500">PLAYTIME: </span>
                          <span className="text-cyan-300">
                            {playTimeHours}h
                          </span>
                        </div>
                      )}
                    </div>

                    {review && (
                      <p className="text-[10px] font-mono text-slate-400 italic line-clamp-1">
                        "{review}"
                      </p>
                    )}

                    <div className="pt-2 flex items-baseline gap-3">
                      <span className="text-2xl font-black text-cyan-400 font-mono">
                        ${numericPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase block">
                      AUTHENTICATED USER
                    </span>
                    <span className="text-cyan-300 truncate block font-semibold">
                      {session?.user?.email || "Guest Checkout"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase block">
                      STOCK STATUS
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      IN STOCK (READY)
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Payment Method Selector */}
              <div className="relative rounded-[2rem] bg-[#0d121f]/90 border border-fuchsia-500/30 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(217,70,239,0.15)] overflow-hidden">
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-fuchsia-400"></div>

                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-fuchsia-400 mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>
                  02. SELECT PAYMENT METHOD
                </h2>

                <div className="space-y-3">
                  {[
                    {
                      id: "card",
                      title: "CREDIT / DEBIT CARD",
                      desc: "Visa, Mastercard, American Express",
                      badge: "FAST",
                    },
                    {
                      id: "wallet",
                      title: "GAME ZONE WALLET",
                      desc: "Available Balance: $120.00",
                      badge: "0% FEES",
                    },
                    {
                      id: "crypto",
                      title: "CRYPTO PAY",
                      desc: "Solana (SOL), Ethereum (ETH), USDT",
                      badge: "WEB3",
                    },
                  ].map((method) => (
                    <label
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.01]"
                          : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            selectedPayment === method.id
                              ? "border-cyan-400 bg-cyan-400"
                              : "border-slate-600"
                          }`}
                        >
                          {selectedPayment === method.id && (
                            <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide uppercase">
                            {method.title}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {method.desc}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${
                          selectedPayment === method.id
                            ? "bg-cyan-400/20 text-cyan-300 border-cyan-400/40"
                            : "bg-slate-900 text-slate-500 border-slate-800"
                        }`}
                      >
                        {method.badge}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: ORDER BREAKDOWN & CONFIRMATION */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
              <div className="relative rounded-[2rem] bg-[#0d121f]/95 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden">
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400"></div>

                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-6">
                  PAYMENT SUMMARY
                </h2>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="mb-6">
                  <label className="block text-[10px] font-mono text-cyan-400 uppercase mb-2">
                    PROMO CODE
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ENTER CODE (e.g. GZ20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 uppercase placeholder-slate-600 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/40 text-cyan-400 font-mono text-xs font-bold transition-all shrink-0"
                    >
                      APPLY
                    </button>
                  </div>

                  {promoError && (
                    <p className="text-[10px] font-mono text-rose-400 mt-2">
                      {promoError}
                    </p>
                  )}
                  {appliedPromo && (
                    <p className="text-[10px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                      ✓ PROMO CODE {appliedPromo.code} APPLIED! (-$
                      {appliedPromo.discount.toFixed(2)})
                    </p>
                  )}
                </form>

                {/* Detailed Cost Breakdown */}
                <div className="space-y-3 font-mono text-xs border-t border-slate-800/80 pt-4 mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>GAME PRICE</span>
                    <span>${numericPrice.toFixed(2)}</span>
                  </div>

                  {appliedPromo && (
                    <div className="flex justify-between text-emerald-400">
                      <span>CYBER DISCOUNT</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-400">
                    <span>PROCESSING FEE</span>
                    <span className="text-emerald-400">FREE</span>
                  </div>

                  <div className="flex justify-between text-slate-400">
                    <span>TAXES & PLATFORM FEES</span>
                    <span>$0.00</span>
                  </div>

                  <div className="flex justify-between text-base font-black text-white pt-4 border-t border-slate-800/80">
                    <span className="uppercase">TOTAL DUE</span>
                    <span className="text-xl text-cyan-400 font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                      ${finalTotal}
                    </span>
                  </div>
                </div>

                {/* Confirm & Purchase Trigger Button */}

                <BuyNowButton game={game}></BuyNowButton>

                <p className="text-[9px] font-mono text-slate-500 text-center mt-4">
                  BY CLICKING CONFIRM, YOU AGREE TO GAME ZONE TERMS OF SERVICE.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default BuyNowCard;
