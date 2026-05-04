import { corevalues } from "@/lib/corevalues";
import Image from "next/image";

export default function CoreValuesSection () {
    return (
        <>
            <section className="section-container bg-background">
                <div className="flex flex-col gap-10">
                    <header className="flex flex-col gap-6 md:max-w-[60%]">
                        <h4 className="header-title text-left">WHAT DRIVES US</h4>
                        <h2 className="header-subtitle text-left">Our core values aren't just on a wall. They're A.G.I.L.E</h2>
                    </header>
                    <div className="flex gap-6 md:gap-1 flex-wrap">
                        {
                            corevalues.map((value, index) => (
                                <div key={index} className="flex flex-col max-w-auto gap-4 border border-foreground p-4 bg-secondary-background hover:bg-[#1C1C1C] flex-wrap shrink grow md:max-w-[30%] lg:max-w-[19.5%]">
                                    <Image 
                                        src={value.icon}
                                        width={20}
                                        height={20}
                                        alt={`${value.value} icon`}
                                    />
                                    <h6 className="text-2xl font-primary text-foreground">{value.value}</h6>
                                    <p className="text-base font-secondary text-secondary-foreground">{value.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}