"use client"
import { serviceslist } from "@/lib/serviceslist";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {motion} from "motion/react"

export default function ServicesSection() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)

        checkMobile()

        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile);
  }, []);

    const slideVariants = {
        hidden: (direction: "left" | "right") => ({
            x: isMobile? 0 : direction === "left" ? "-100%" : "100%",
            y: isMobile? 100 : 0,
            opacity: 0
        }),

        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: isMobile? {duration: 0.6, ease: "easeOut"} as const : {duration: 1, ease: "easeOut"} as const,
        }
    } as const

    return (
        <>
            <section id="services" className="section-container items-center scroll-mt-20 overflow-hidden">
                <header className="section-header md:max-w-220">
                    <h4 className="header-title">WHAT WE DO</h4>
                    <h2 className="header-subtitle">Software services that help your business grow</h2>
                </header>
                <div className="flex flex-col gap-10">
                    {
                        serviceslist.map((service, index) => (
                            <div key={index} className={`flex flex-col gap-4 items-center ${index %2 === 0? "lg:flex-row": "lg:flex-row-reverse"}`}>
                                <motion.div
                                    key={`${index}-${isMobile}`} 
                                    className="lg:min-w-[50%]"
                                    custom={index %2 === 0? "left": "right"}
                                    variants={slideVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.05}}
                                >
                                    <Image 
                                        src={service.img}
                                        className="border border-foreground"
                                        alt={service.title}
                                        width={628}
                                        height={600}
                                    />
                                </motion.div>
                                <motion.div
                                    key={`${isMobile}`} 
                                    className="flex flex-col gap-6"
                                    custom={index %2 === 0? "right": "left"}
                                    variants={slideVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.05}}
                                >
                                    <h6 className="content-title">{service.title}</h6>
                                    <h6 className="content-subtitle">{service.subtitle}</h6>
                                    <p className="content-description">{service.description}</p>
                                    <Link href={service.url}>
                                        <button className="flex gap-2 font-secondary text-foreground items-center">
                                            Learn more
                                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.96939 14.781C9.89966 14.7114 9.84434 14.6287 9.8066 14.5376C9.76886 14.4466 9.74943 14.349 9.74943 14.2504C9.74943 14.1519 9.76886 14.0543 9.8066 13.9632C9.84434 13.8722 9.89966 13.7894 9.96939 13.7198L15.4397 8.25042H0.750021C0.551109 8.25042 0.360343 8.1714 0.21969 8.03075C0.079038 7.8901 2.09808e-05 7.69933 2.09808e-05 7.50042C2.09808e-05 7.3015 0.079038 7.11074 0.21969 6.97009C0.360343 6.82943 0.551109 6.75042 0.750021 6.75042H15.4397L9.96939 1.28104C9.82866 1.14031 9.7496 0.94944 9.7496 0.750417C9.7496 0.551394 9.82866 0.360523 9.96939 0.219792C10.1101 0.0790615 10.301 1.48284e-09 10.5 0C10.699 -1.48284e-09 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8504 7.03945 17.9057 7.12216 17.9434 7.21321C17.9812 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9812 7.69657 17.9434 7.78762C17.9057 7.87867 17.8504 7.96139 17.7806 8.03104L11.0306 14.781C10.961 14.8508 10.8783 14.9061 10.7872 14.9438C10.6962 14.9816 10.5986 15.001 10.5 15.001C10.4015 15.001 10.3039 14.9816 10.2128 14.9438C10.1218 14.9061 10.039 14.8508 9.96939 14.781Z" fill="#FFF49B"/>
                                            </svg>

                                        </button>
                                    </Link>
                                </motion.div>
                                
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}