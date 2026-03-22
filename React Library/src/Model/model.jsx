import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
   useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "unset";
      return () => {
         document.body.style.overflow = "unset";
      };
   }, [isOpen]);

   if (!isOpen) return null;

   return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         {/* Darker, heavier blur for the background */}
         <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={onClose}
         ></div>

         {/* The Glassmorphic Modal Box */}
         <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 flex flex-col ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-5 border-b border-slate-800 pb-4">
               {title && (
                  <h3 className="text-lg font-medium text-slate-100">
                     {title}
                  </h3>
               )}
               <button
                  onClick={onClose}
                  className="text-slate-500 hover:text-slate-300 hover:bg-slate-800 p-1.5 rounded-lg transition-colors cursor-pointer"
               >
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
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
            </div>
            <div className="text-slate-400 text-sm">{children}</div>
         </div>
      </div>,
      document.body,
   );
};

export default Modal;
