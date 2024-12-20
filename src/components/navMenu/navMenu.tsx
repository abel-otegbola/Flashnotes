'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type MenuProps = { 
    close: (aug0: boolean) => void; 
    list: { id: string, title: string, href: string, icon: ReactNode }[]
}

export default function Menu ({ close, list }: MenuProps) {
    const pathname = usePathname()

    const signOut = () => {

    }

    return (
        <div className="flex flex-col gap-2 p-2 w-[150px] rounded shadow-md border border-gray-500/[0.3] dark:border-gray-500/[0.06] absolute top-12 right-0 bg-white dark:bg-black dark:text-gray z-[10]">
            { 
                list.map(item => (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => item.title === "Logout" ? signOut() : close(false)}
                        className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                            ${pathname === item.href ? "bg-tetiary dark:bg-dark text-primary" : ""}
                        `}
                    >
                        <span className="text-lg opacity-[0.6]">{item.icon}</span>
                        <span className="md:inline">{item.title}</span>
                    </Link>
                )) 
            }
        </div>       
    )
}