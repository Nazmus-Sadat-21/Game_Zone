import React from 'react';

const loading = () => {
    return (
    <div className="min-h-[85vh] w-full flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#121522]/90 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-[0_0_50px_rgba(15,23,42,0.8)] p-6 sm:p-8 animate-pulse">
        
        {/* Brand Header Skeleton */}
        <div className="flex flex-col items-center mb-8 space-y-2">
          {/* Animated Spinner & Logo Placeholder */}
          <div className="relative flex items-center justify-center w-12 h-12 mb-2">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xs" />
          </div>

          <div className="h-7 w-36 bg-slate-800 rounded-lg"></div>
          <div className="h-3 w-48 bg-slate-800/60 rounded-md"></div>
        </div>

        {/* Form Fields Skeleton */}
        <div className="space-y-5">
          {/* Input Field 1 */}
          <div>
            <div className="h-3 w-16 bg-slate-800 rounded-md mb-2"></div>
            <div className="h-11 w-full bg-slate-900/90 border border-slate-800/80 rounded-xl"></div>
          </div>

          {/* Input Field 2 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="h-3 w-20 bg-slate-800 rounded-md"></div>
              <div className="h-3 w-24 bg-slate-800/60 rounded-md"></div>
            </div>
            <div className="h-11 w-full bg-slate-900/90 border border-slate-800/80 rounded-xl"></div>
          </div>

          {/* Input Field 3 */}
          <div>
            <div className="h-3 w-28 bg-slate-800 rounded-md mb-2"></div>
            <div className="h-11 w-full bg-slate-900/90 border border-slate-800/80 rounded-xl"></div>
          </div>

          {/* Action Button Skeleton */}
          <div className="h-11 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl mt-6"></div>
        </div>

        {/* Divider Skeleton */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px bg-slate-800 flex-1"></div>
          <div className="h-3 w-6 bg-slate-800/60 rounded-md"></div>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {/* Social Button Skeleton */}
        <div className="mt-4 h-10 w-full bg-slate-900/90 border border-slate-800/80 rounded-xl"></div>

        {/* Footer Link Skeleton */}
        <div className="mt-6 flex justify-center">
          <div className="h-3 w-52 bg-slate-800/60 rounded-md"></div>
        </div>

      </div>
    </div>
  );
};

export default loading;