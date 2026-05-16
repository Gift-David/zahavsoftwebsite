import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre () {
    return (
        <>
            <section className="section-container bg-background ">
                <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-4 items-center">
                    <div className="flex flex-col gap-8">
                        <h4 className="header-title text-center lg:text-left">WHO WE ARE</h4>
                        <h2 className="header-subtitle text-center lg:text-left">We think in systems and dream in pixels</h2>
                        <p className="content-description">ZAHAVSOFT is a premium digital design agency built to help forward-thinking businesses stand out, connect deeply, and grow with intention. We were founded on a simple belief: great design is never decoration — it's infrastructure. We are strategists, designers, and builders who work best at the intersection of beauty and function. We care about the details because details are what people actually feel when they use your product.</p>
                        <Link href="/contact">
                            <button className="primary-btn">Work With Us</button>
                        </Link>
                    </div>
                    <div className="flex relative border border-foreground lg:min-w-[628] lg:min-h-[500]">
                        <Image 
                            src="/images/whoWeAre.png"
                            className="relative"
                            alt="Who we are"
                            width={628}
                            height={600}
                        />
                        <div className="absolute bg-background/20 inset-0"></div>
                    </div>
                </div>
            </section>
        </>
    )
}