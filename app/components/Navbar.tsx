"use client";
import { navbarlist } from "@/lib/navbarlist"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import {usePathname} from 'next/navigation'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean | null>(null)
    const pathName = usePathname()
    
    return (
        <>
            <nav className="flex flex-col bg-background w-full fixed top-0 left-0 pr-10 pl-10 lg:pr-20 lg:pl-20 pt-3 pb-3 md:pt-4 md:pb-4 z-10 border-b-[0.5] border-foreground">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Link href={'/'}>
                        <Image 
                            src="/images/logo.png"
                            className=""
                            alt="Zahavsoft Logo"
                            width={118}
                            height={40}
                        />
                        </Link>
                    </div>
                    <div className={`hidden lg:flex lg:flex-row gap-5`}>
                        {navbarlist.map((list, index) => {
                            const hasSubLinks = list.subLinks && list.subLinks.length > 0;
                            return (
                                <div key={index} className="relative group flex justify-center">
                                    <Link
                                        href={list.link}
                                        className={`font-primary text-base duration-300 z-2 group-hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                                    >
                                        {list.name}
                                    </Link>

                                    {
                                        hasSubLinks && (
                                            <div className="hidden group-hover:flex hover:flex flex-col gap-2 absolute bg-background p-3 pt-8 w-40">
                                                {list.subLinks.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.link}
                                                        className="text-nav-links font-secondary text-base hover:text-foreground transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                                
                            )
                            
                        }
                        
                        
                        )}
                    </div>

                    <div className="flex gap-10 items-center">
                        <div className="hidden md:flex">
                            <Link
                                href={"/contact"}
                            >
                                <button className="primary-btn">Start a Project</button>
                            </Link>
                        </div>

                        <div onClick={ () => setIsOpen(!isOpen)} className="lg:hidden">
                            <RiMenu3Line className="text-foreground h-8 w-8 md:h-10 md:w-10" />
                        </div>
                    </div>
                </div>


                <div className={`lg:hidden gap-5 self-center pt-10 ${isOpen? "flex flex-col" : "hidden"}`}>
                    {navbarlist.map((list, index) => (
                        <Link
                            key={index}
                            href={list.link}
                            className={`text-center font-primary text-base hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                        >
                            {list.name}
                        </Link>
                    ))}
                        <Link
                            href={"/contact"}
                            className="md:hidden w-full pt-6"
                        >
                            <button className="primary-btn">Start a Project</button>
                        </Link>
                </div>
            </nav>
        </>
    )
}