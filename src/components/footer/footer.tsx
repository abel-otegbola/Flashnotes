'use client'

import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";


function Footer() {
    const pathname  = usePathname()

    return (
        <footer className={`bg-gray-500/[0.06] border border-gray-500/[0.1] dark:bg-primary/[0.04] dark:text-white md:mt-[100px] mt-8 md:my-4 md:mx-10 md:rounded-[20px] ${pathname.indexOf("/dashboard") !== -1 ? "hidden" : ""}`}>
            <div className="grid md:grid-cols-4 grid-cols-2 max-[300px]:grid-cols-1 items-start md:gap-[30px] gap-[60px] md:px-[8%] p-8 py-[60px]">
                <ul className="flex flex-col gap-[16px] text-[12px] justify-center">
                    <h2 className="font-semibold text-[14px] pb-2">Products</h2>
                    <li className=""><a href="/" className="py-[5px] w-full">Todo list</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">Flashcards</a></li>
                </ul>
                <ul className="flex flex-col gap-[16px] text-[12px] justify-center">
                    <h2 className="font-semibold text-[14px]">Supports</h2>
                    <li className=""><a href="/" className="py-[5px] w-full">Customer Support</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">FAQs</a></li>
                    <li className=""><a href="/shop" className="py-[5px] w-full">Privacy Policy</a></li>
                    <li className=""><a href="/contact" className="py-[5px] w-full">T&C</a></li>
                </ul>
                <div className="flex flex-col gap-4 col-span-2">
                    <h1 className="text-[18px] font-bold">Flash notes</h1>
                    <ul className="">
                        <div className="flex flex-wrap gap-4 py-2 mb-4">
                            <a href="https://facebook.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><FacebookLogo size={18}/></a>
                            <a href="https://twitter.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><XLogo size={18}/></a>
                            <a href="https://instagram.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><InstagramLogo size={18}/></a>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-500/[0.2] text-center">
                <p className="px-[3%] py-10 flex items-center font-bold gap-2 justify-center">Flashnotes &copy; Copyright  {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;