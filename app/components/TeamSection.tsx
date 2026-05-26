import { team_members } from "@/lib/teammembers";
import Image from "next/image";

export default function TeamSection () {
    return (
        <>
            <section className="section-container">
                <div className="flex flex-col justify-center items-center gap-12">
                    <header className="section-header md:max-w-162">
                        <h4 className="header-title">THE PEOPLE BEHIND THE WORK</h4>
                        <h2 className="header-subtitle">The Team that plans and executes</h2>
                    </header>

                    <div className="flex flex-wrap gap-8 lg:gap-6">
                        {
                            team_members.map((member, index) => (
                                <div key={index} className="card p-0 md:max-w-[45%] lg:max-w-[30%]">
                                    <div className="relative">
                                        <Image 
                                            src={member.image}
                                            width={403}
                                            height={300}
                                            alt={member.name}
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(179.86deg,rgba(9,23,52,0)_0.13%,rgba(9,23,52,0.57)_62.2%,#091734_88.57%)]"></div>
                                    </div>
                                    <div className="flex flex-col gap-4 pr-2 pl-6 pb-12 pt-2 max-w-100.75">
                                        <h4 className="text-xl md:text-2xl font-primary text-secondary-foreground ">{member.name}</h4>
                                        <h6 className="text-base font-secondary text-foreground -mt-3">{member.position}</h6>
                                        <p className="text-base font-secondary text-secondary-foreground">{member.description} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}