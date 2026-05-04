import Link from "next/link"

export default function CtaSection() {
    return (
        <>
            <section id="cta" className="flex  bg-[url('/images/ctaimg.png')] bg-cover bg-center h-175 ">
                <div className="flex flex-col gap-8 bg-overlay/50 justify-center items-center pt-10">
                    <h4 className="font-normal font-primary text-base text-foreground">READY TO BEGIN?</h4>
                    <h2 className="flex font-normal font-primary text-4xl lg:text-6xl text-secondary-foreground text-center">Your best digital product starts with one Conversation</h2>
                    <Link href="/contact">
                        <button className="primary-btn font-primary">Let's Talk</button>
                    </Link>
                    
                </div>

            </section>

        </>
    )
}