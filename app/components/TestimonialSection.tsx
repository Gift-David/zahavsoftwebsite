"use client"
import { testimoniallists } from "@/lib/testimoniallists";
import {useState} from 'react'
import { useSwipeable } from "react-swipeable";

export default function TestimonialSection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex < testimoniallists.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    const swipe = useSwipeable({
        onSwipedRight: prev,
        onSwipedLeft: next,
        trackMouse: true,
    })

    return (
        <>
            <section className="section-container bg-background">
                <div className="flex justify-between md:items-center">
                    <div className="flex flex-col gap-6 justify-start">
                        <h4 className="header-title text-left">What our clients say</h4>
                        <h4 className="header-subtitle text-left">What our clients are saying</h4>
                    </div>
                    <div className="flex gap-2">
                        <button className={`cursor-pointer`} disabled={currentIndex === 0}>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-10 h-10 md:w-13.5 md:h-13.5 ${currentIndex === 0? "opacity-50": "opacity-100"} `} onClick={prev}>
                                <g opacity="0.5">
                                    <rect x="55" y="55" width="54" height="54" rx="27" transform="rotate(180 55 55)" stroke="#FFF49B" stroke-width="2"/>
                                    <path d="M27.0306 20.7194C27.1003 20.7891 27.1557 20.8718 27.1934 20.9629C27.2311 21.0539 27.2506 21.1515 27.2506 21.2501C27.2506 21.3486 27.2311 21.4462 27.1934 21.5373C27.1557 21.6283 27.1003 21.711 27.0306 21.7807L21.5603 27.2501H36.25C36.4489 27.2501 36.6397 27.3291 36.7803 27.4697C36.921 27.6104 37 27.8012 37 28.0001C37 28.199 36.921 28.3897 36.7803 28.5304C36.6397 28.6711 36.4489 28.7501 36.25 28.7501H21.5603L27.0306 34.2194C27.1713 34.3602 27.2504 34.551 27.2504 34.7501C27.2504 34.9491 27.1713 35.14 27.0306 35.2807C26.8899 35.4214 26.699 35.5005 26.5 35.5005C26.301 35.5005 26.1101 35.4214 25.9694 35.2807L19.2194 28.5307C19.1496 28.461 19.0943 28.3783 19.0566 28.2873C19.0188 28.1962 18.9994 28.0986 18.9994 28.0001C18.9994 27.9015 19.0188 27.8039 19.0566 27.7129C19.0943 27.6218 19.1496 27.5391 19.2194 27.4694L25.9694 20.7194C26.039 20.6497 26.1217 20.5944 26.2128 20.5567C26.3038 20.5189 26.4014 20.4995 26.5 20.4995C26.5985 20.4995 26.6961 20.5189 26.7872 20.5567C26.8782 20.5944 26.961 20.6497 27.0306 20.7194Z" fill="#FFF49B"/>
                                </g>
                            </svg>
                        </button>

                        <button className="cursor-pointer" disabled={currentIndex === testimoniallists.length - 1}>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-10 h-10 md:w-13.5 md:h-13.5 ${currentIndex === testimoniallists.length - 1? "opacity-50": "opacity-100"}`} onClick={next}>
                            <rect width="56" height="56" rx="28" fill="#FFF49B"/>
                            <path d="M28.9694 35.2806C28.8997 35.2109 28.8443 35.1282 28.8066 35.0371C28.7689 34.9461 28.7494 34.8485 28.7494 34.7499C28.7494 34.6514 28.7689 34.5538 28.8066 34.4627C28.8443 34.3717 28.8997 34.289 28.9694 34.2193L34.4397 28.7499H19.75C19.5511 28.7499 19.3603 28.6709 19.2197 28.5303C19.079 28.3896 19 28.1988 19 27.9999C19 27.801 19.079 27.6103 19.2197 27.4696C19.3603 27.3289 19.5511 27.2499 19.75 27.2499H34.4397L28.9694 21.7806C28.8287 21.6398 28.7496 21.449 28.7496 21.2499C28.7496 21.0509 28.8287 20.86 28.9694 20.7193C29.1101 20.5786 29.301 20.4995 29.5 20.4995C29.699 20.4995 29.8899 20.5786 30.0306 20.7193L36.7806 27.4693C36.8504 27.539 36.9057 27.6217 36.9434 27.7127C36.9812 27.8038 37.0006 27.9014 37.0006 27.9999C37.0006 28.0985 36.9812 28.1961 36.9434 28.2871C36.9057 28.3782 36.8504 28.4609 36.7806 28.5306L30.0306 35.2806C29.961 35.3503 29.8783 35.4056 29.7872 35.4433C29.6962 35.4811 29.5986 35.5005 29.5 35.5005C29.4015 35.5005 29.3039 35.4811 29.2128 35.4433C29.1218 35.4056 29.039 35.3503 28.9694 35.2806Z" fill="#0D2048"/>
                        </svg>
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden min-w-full">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`}} >
                        {testimoniallists.map((testimonial, index) => (
                            <div key={index} className="flex flex-col gap-2 min-w-full select-none" {...swipe}>
                                <p className="text-secondary-foreground font-secondary text-base text-justify md:text-left">{testimonial.description}</p>
                                <h4 className="font-primary text-foreground text-base">{testimonial.name}</h4>
                                <h6 className="font-secondary text-secondary-foreground text-base">{testimonial.position}</h6>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="flex gap-2 justify-center">
                    {testimoniallists.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-4 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-12.5 bg-foreground' : 'w-4 bg-gray-600'
                            }`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}