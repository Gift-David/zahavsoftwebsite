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
            <nav className="flex flex-col bg-background w-full fixed top-0 left-0 pr-10 pl-10 lg:pr-20 lg:pl-20 pt-6 pb-6 z-10 border-b-[0.5] border-foreground">
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
                        {navbarlist.map((list, index) => (
                            <Link
                                key={index}
                                href={list.link}
                                className={`font-primary text-base hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                            >
                                {list.name}
                            </Link>
                        ))}
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