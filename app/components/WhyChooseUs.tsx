import { whyChooseUs } from "@/lib/whychooseus";

export default function WhyChooseUsSection() {
    return (
        <>
            <section className="bg-[url('/images/why-choose-us.png')] ">
                <div className="section-container bg-overlay/50 justify-center items-center">
                    <header className="section-header md:max-w-160.25 ">
                        <h4 className="header-title">WHY CHOOSE US</h4>
                        <h2 className="header-subtitle">Built for brands that refuse to settle</h2>
                        <p className="text-base font-secondary text-secondary-foreground text-center">Choosing the right design partner is one of the most important decisions you'll make for your business. Here's why ZAHAVSOFT is that partner</p>
                    </header>
                    <div className="flex flex-wrap gap-6 justify-center ">
                        {
                            whyChooseUs.map((why, index) => (
                                <div key={index} className="card gap-6 md:max-w-none lg:max-w-[30%]">
                                    <h6 className="text-base font-primary text-foreground">{why.id}</h6>
                                    <h6 className="text-secondary-foreground font-primary text-2xl">{why.title}</h6>
                                    <p className="font-secondary text-base text-secondary-foreground">{why.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}