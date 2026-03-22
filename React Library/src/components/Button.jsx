import React from "react";
import PropTypes from "prop-types";

const Button = ({
   children,
   onClick,
   type = "button",
   variant = "primary",
   size = "md",
   className = "",
   disabled = false,
   isLoading = false,
   icon = null,
   ...props
}) => {
   const baseStyles =
      "relative flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]";

   const variants = {
      // PRO EMERALD: Deep green to teal gradient. No purple.
      primary:
         "bg-gradient-to-b from-emerald-400 to-emerald-600 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-300/30 hover:from-emerald-300 hover:to-emerald-500",

      // DARK GLASS: Subtle borders, very clean
      outline:
         "bg-slate-900/50 backdrop-blur-sm text-slate-200 border border-slate-700 hover:bg-slate-800 hover:border-slate-500 hover:text-white shadow-sm",

      // MINIMALIST GHOST: Simple and out of the way
      ghost: "bg-transparent text-slate-500 hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent",
   };

   const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
   };

   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled || isLoading}
         className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
         {...props}
      >
         {isLoading ? (
            "Loading..."
         ) : (
            <>
               {icon && <span>{icon}</span>}
               {children}
            </>
         )}
      </button>
   );
};

Button.propTypes = {
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
   type: PropTypes.oneOf(["button", "submit", "reset"]),
   variant: PropTypes.oneOf(["primary", "outline", "ghost"]),
   size: PropTypes.oneOf(["sm", "md", "lg"]),
   className: PropTypes.string,
   disabled: PropTypes.bool,
   isLoading: PropTypes.bool,
   icon: PropTypes.element,
};

export default Button;
