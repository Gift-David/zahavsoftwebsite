export default function VisionMissionSection() {
    return (
        <>
            <section className="section-container">
                <div className="flex flex-col md:flex-row gap-12 md:gap-8 md:gap-5 lg:gap-6">
                    <div className="flex flex-col gap-6 md:w-[50%]">
                        <h4 className="header-title text-left">OUR MISSION</h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-14.5 font-primary text-secondary-foreground text-left">To build efficient, secure and scalable software solutions for businesses.</h2>
                        <p className="content-description">We build software that doesn't just work; It works hard for your business. Every solution we deliver is engineered for efficiency, secured against risk, and built to scale as your ambitions grow, making you highly impactful in your market.</p>
                    </div>
                    <div className="hidden md:flex border-[0.5px] md:border-muted/50 h-auto w-0"></div>
                    <p className="flex md:hidden border-[0.5px] border-muted/50 h-0 w-auto"></p>
                    <div className="flex flex-col gap-6 md:w-[50%] ">
                        <h4 className="header-title text-left">OUR VISION</h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-14.5 font-primary text-secondary-foreground text-left">To empower every business with the technical foundation to achieve limitless growth.</h2>
                        <p className="content-description">We envision a world where no business is held back by weak technology. Every company — no matter the size — deserves a digital foundation strong enough to support limitless growth and lasting market impact. That is the standard we build to, every single time.</p>
                    </div>
                </div>
            </section>
        </>
    )
}