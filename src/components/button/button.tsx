import { ReactNode, ButtonHTMLAttributes } from "react";

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tetiary";
    className?: string;
    href?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children, ...props }: buttonProps) {
    const variants = {
        primary: "hover:bg-black/[0.8] bg-black dark:bg-[#000]/[0.2] text-white border border-black dark:border-none",
        secondary: "hover:bg-black hover:text-white border border-black dark:border-white/[0.1]",
        tetiary: ""
    }

    return (
        <button className={`md:text-[14px] text-[12px] duration-500 rounded
            ${variants[variant || "primary"]}
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "w-fit"}
            ${className} 
        `}
        {...props}
        name="Button"
        role="button"
        disabled={disabled}
        onClick={onClick}
        >
            { 
            href ? 
                <a href={href} className="flex items-center justify-center md:gap-3 gap-2 md:p-[8px] py-1 md:px-6 px-4"> 
                    { children }
                </a>
                :
                <p className="flex items-center justify-center md:gap-3 gap-2 md:p-[8px] py-1 md:px-6 px-4">{ children }</p>
            }
        </button>
    )
}