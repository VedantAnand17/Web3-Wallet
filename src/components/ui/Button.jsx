import React from 'react';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg hover:shadow-primary-500/25 hover:from-primary-500 hover:to-indigo-500 border border-transparent",
                secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md shadow-sm",
                outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white",
                ghost: "hover:bg-white/10 text-gray-300 hover:text-white",
                link: "text-primary-400 underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 border border-transparent"
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-lg px-3",
                lg: "h-14 rounded-2xl px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/* 
  Note: I am not installing class-variance-authority currently as I am avoiding too many deps.
  I will rewrite this to standard switch case / object lookup if CVA is not available, 
  but CVA is very standard. I'll check if I can install it or if I should just write plain JS.
  I previously installed clsx and tailwind-merge. I will add cva now or just inline the logic.
  
  Actually, I will just inline a simple variant utility or simplified logic to avoid another install if I want to be super fast,
  but `cva` is best practice. I'll assume I can install it quickly.
*/

// Simplified version without CVA for now to avoid dependency hell if the user is strict, 
// BUT I see I can run commands. I will run `bun add class-variance-authority` in the background.

// For now, I'll write it so it works even if I haven't installed it yet (by just not using it if I was unsure, 
// but I will instruct to install it).
// Wait, to be safe, I will just write a poor-man's CVA here to guarantee it works immediately.

const getButtonClass = ({ variant, size, className }) => {
    const base = "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

    const variants = {
        default: "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:from-primary-500 hover:to-indigo-500 border border-transparent",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-md",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white",
        ghost: "hover:bg-white/5 text-gray-400 hover:text-white",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20",
        premium: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 border border-transparent"
    };

    const sizes = {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10 px-0",
    };

    return cn(base, variants[variant || 'default'], sizes[size || 'default'], className);
};

const Button = React.forwardRef(({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
        <button
            className={getButtonClass({ variant, size, className })}
            ref={ref}
            disabled={isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
});
Button.displayName = "Button";

export { Button };
