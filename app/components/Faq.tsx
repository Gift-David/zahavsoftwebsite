"use client";
import { faqlist } from "@/lib/faqlist"
import Link from "next/link"
import { useState } from "react"

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    return (
        <>
            <section id="faq" className="section-container flex flex-col lg:justify-between lg:flex-row lg:items-center lg:h-125">
                <div className="flex flex-col gap-8 lg:max-w-118">
                    <h4 className="font-primary text-[12px] md:text-base font-normal text-foreground">COMMON QUESTIONS</h4>
                    <h2 className="font-primary text-4xl md:text-5xl font-normal text-secondary-foreground">Everything you want to know before saying yes</h2>
                    <p className="font-secondary text-[12px] md:text-base font-normal text-secondary-foreground">Transparency is part of how we work. If you don't  see your question answered here, reach out and we will get back to you</p>
                    <Link href="/contact">
                        <button className="primary-btn">Ask us anything</button>
                    </Link>
                </div>

                <div className="flex flex-col gap-6">
                    {faqlist.map((faq, index) => (
                        <div key={index} className="flex flex-col gap-5 border-b border-b-foreground pb-4 overflow-hidden">
                            <div
                                className={`flex flex-row justify-between items-center group cursor-pointer`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            
                            >
                                <p
                                    className={`font-primary max-w-[95%] md:max-w-none text-sm md:text-base group-hover:text-foreground ${openIndex === index? "text-foreground" : "text-secondary-foreground" }` }
                                >
                                    {faq.question}
                                </p>
                                <div>
                                    {
                                        openIndex === index? (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#FFF49B"/>
                                            </svg>

                                        ) : (
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 9C18 9.19891 17.921 9.38968 17.7803 9.53033C17.6397 9.67098 17.4489 9.75 17.25 9.75H9.75V17.25C9.75 17.4489 9.67098 17.6397 9.53033 17.7803C9.38968 17.921 9.19891 18 9 18C8.80109 18 8.61032 17.921 8.46967 17.7803C8.32902 17.6397 8.25 17.4489 8.25 17.25V9.75H0.75C0.551088 9.75 0.360322 9.67098 0.21967 9.53033C0.0790178 9.38968 0 9.19891 0 9C0 8.80109 0.0790178 8.61032 0.21967 8.46967C0.360322 8.32902 0.551088 8.25 0.75 8.25H8.25V0.75C8.25 0.551088 8.32902 0.360322 8.46967 0.21967C8.61032 0.0790178 8.80109 0 9 0C9.19891 0 9.38968 0.0790178 9.53033 0.21967C9.67098 0.360322 9.75 0.551088 9.75 0.75V8.25H17.25C17.4489 8.25 17.6397 8.32902 17.7803 8.46967C17.921 8.61032 18 8.80109 18 9Z" fill="#FFF49B"/>
                                            </svg>
                                        )
                                    }
                                </div>
                                
                            </div>

                            <div className={`transition-all ease-in-out ${openIndex === index? "flex" : "hidden"}`}>
                                <p className={`font-secondary text-secondary-foreground text-sm md:text-base `}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}