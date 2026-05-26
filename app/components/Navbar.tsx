"use client";
import { navbarlist } from "@/lib/navbarlist"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import {usePathname} from 'next/navigation'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean | null>(null)
    const [openSubLinkIndex, setOpenSubLinkIndex] = useState<number | null>(null);
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
                                <div key={index} className="relative group flex gap-1 delay-1000">
                                    {hasSubLinks? (
                                         <button
                                        className={`font-primary text-base duration-300 z-2 group-hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                                        >
                                            {list.name}
                                        </button>
                                    ) : (
                                        <Link
                                        href={list.link}
                                        className={`font-primary text-base duration-300 z-2 group-hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                                    >
                                        {list.name}
                                    </Link>
                                    )}

                                    {
                                        hasSubLinks && (
                                            <div className="z-2 text-nav-links group-hover:text-foreground mt-0.5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                                                    <path d="M20.0306 9.53062L12.5306 17.0306C12.461 17.1003 12.3782 17.1557 12.2872 17.1934C12.1961 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6217 17.1557 11.539 17.1003 11.4694 17.0306L3.96936 9.53062C3.82863 9.38988 3.74957 9.19901 3.74957 8.99999C3.74957 8.80097 3.82863 8.61009 3.96936 8.46936C4.1101 8.32863 4.30097 8.24957 4.49999 8.24957C4.69901 8.24957 4.88988 8.32863 5.03061 8.46936L12 15.4397L18.9694 8.46936C19.039 8.39968 19.1218 8.34441 19.2128 8.30669C19.3039 8.26898 19.4014 8.24957 19.5 8.24957C19.5985 8.24957 19.6961 8.26898 19.7872 8.30669C19.8782 8.34441 19.9609 8.39968 20.0306 8.46936C20.1003 8.53905 20.1556 8.62177 20.1933 8.71282C20.231 8.80386 20.2504 8.90144 20.2504 8.99999C20.2504 9.09854 20.231 9.19612 20.1933 9.28716C20.1556 9.37821 20.1003 9.46093 20.0306 9.53062Z"/>
                                                </svg>

                                            </div>
                                        )
                                    }
                                    
                                    {
                                        hasSubLinks && (
                                            <div className="hidden transition-transform duration-300 group-hover:flex flex-col border-b border-foreground gap-0 absolute bg-background pt-14.5 w-40">
                                                {list.subLinks.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.link}
                                                        className="text-secondary-foreground first:border-t border-r border-l border-foreground font-secondary p-3 text-base hover:bg-foreground hover:text-background w-full transition-colors"
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


                {/* Nav Menu for Mobile */}
                <div className={`lg:hidden gap-5 justify-center self-center pt-10 ${isOpen? "flex flex-col" : "hidden"}`}>
                    {navbarlist.map((list, index) => {
                            const hasSubLinks = list.subLinks && list.subLinks.length > 0;
                            return (
                                <div key={index} className="flex group justify-center flex-wrap gap-1">
                                    {hasSubLinks? (
                                        <button
                                        className={`text-center font-primary text-base hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                                        onClick={() => setOpenSubLinkIndex(openSubLinkIndex === index ? null : index)}
>
                                        {list.name}
                                    </button>
                                    ) : (
                                        <Link
                                        href={list.link}
                                        className={`text-center font-primary text-base hover:text-foreground ${pathName === list.link? "text-foreground" : "text-nav-links"}`}
                                    >
                                        {list.name}
                                    </Link>
                                    ) }
                                    

                                    {
                                        hasSubLinks && (
                                            <div className="z-2 text-nav-links group-hover:text-foreground mt-0.5" onClick={() => setOpenSubLinkIndex(openSubLinkIndex === index ? null : index)}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                                                    <path d="M20.0306 9.53062L12.5306 17.0306C12.461 17.1003 12.3782 17.1557 12.2872 17.1934C12.1961 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6217 17.1557 11.539 17.1003 11.4694 17.0306L3.96936 9.53062C3.82863 9.38988 3.74957 9.19901 3.74957 8.99999C3.74957 8.80097 3.82863 8.61009 3.96936 8.46936C4.1101 8.32863 4.30097 8.24957 4.49999 8.24957C4.69901 8.24957 4.88988 8.32863 5.03061 8.46936L12 15.4397L18.9694 8.46936C19.039 8.39968 19.1218 8.34441 19.2128 8.30669C19.3039 8.26898 19.4014 8.24957 19.5 8.24957C19.5985 8.24957 19.6961 8.26898 19.7872 8.30669C19.8782 8.34441 19.9609 8.39968 20.0306 8.46936C20.1003 8.53905 20.1556 8.62177 20.1933 8.71282C20.231 8.80386 20.2504 8.90144 20.2504 8.99999C20.2504 9.09854 20.231 9.19612 20.1933 9.28716C20.1556 9.37821 20.1003 9.46093 20.0306 9.53062Z"/>
                                                </svg>

                                            </div>
                                        )
                                    }
                                    
                                    {
                                        hasSubLinks && (
                                            <div className={`transition-transform duration-300 flex-col border-b-[0.1px] border-foreground/50 gap-0 bg-background pt-3 w-full ${openSubLinkIndex === index? "flex" : "hidden"}`}>
                                                {list.subLinks.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.link}
                                                        className="text-secondary-foreground text-center font-secondary p-3 text-base hover:bg-foreground hover:text-background w-full transition-colors"
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

                        <Link
                            href={"/contact"}
                            className="flex md:hidden w-full pt-6 justify-center"
                        >
                            <button className="primary-btn">Start a Project</button>
                        </Link>
                </div>
            </nav>
        </>
    )
}