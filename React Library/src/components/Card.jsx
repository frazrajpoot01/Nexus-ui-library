import React from "react";

// 1. The main card (Default Export)
const Card = ({ children, className = "", ...props }) => {
   return (
      <div
         className={`bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-700/60 hover:shadow-2xl hover:shadow-indigo-500/10 ring-1 ring-white/5 ${className}`}
         {...props}
      >
         {children}
      </div>
   );
};

// 2. The Header (Named Export)
export const CardHeader = ({ children, className = "", ...props }) => {
   return (
      <div
         className={`px-6 py-5 border-b border-slate-800/60 font-medium text-lg text-slate-100 ${className}`}
         {...props}
      >
         {children}
      </div>
   );
};

// 3. The Body (Named Export)
export const CardBody = ({ children, className = "", ...props }) => {
   return (
      <div
         className={`p-6 flex-grow text-slate-400 text-sm leading-relaxed ${className}`}
         {...props}
      >
         {children}
      </div>
   );
};

// 4. The Footer (Named Export)
export const CardFooter = ({ children, className = "", ...props }) => {
   return (
      <div
         className={`px-6 py-4 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-end gap-3 ${className}`}
         {...props}
      >
         {children}
      </div>
   );
};

export default Card;
