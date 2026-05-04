import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
      <>
        <section className="flex flex-col hero-bg ">
            <Navbar />
            <div className=" relative flex flex-col-reverse lg:flex-row gap-14.75 justify-center items-center pt-30 pr-10 pl-10 pb-10 lg:pr-20 lg:pl-20 lg:pb-10">
                <div className="absolute hero-bg-overlay z-0 inset-0 opacity-20"></div>
                <div className="flex flex-col gap-6 md:gap-10 justify-center md:justify-start lg:max-w-[50%] z-2">
                    <h1 className="font-primary text-secondary-foreground text-4xl md:text-6xl lg:text-7xl">We Build The <span className="text-foreground">Future</span>, Not Just Interfaces</h1>
                    <p className="text-secondary-foreground font-secondary text-xl md:text-2xl">We build intuitive digital experiences for startups, businesses, and growing brands.</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href={'/contact'}>
                            <button className="primary-btn font-primary w-full md:w-auto">Start a Project</button>
                        </Link>
                        <Link href={'/about'}>
                            <button className="secondary-btn font-primary w-full md:w-54.5">Our Story</button>
                        </Link>
                    </div>
                </div>

                <div className="z-2">
                    <Image 
                        src="/images/hero-img.png"
                        className=""
                        alt="Hero Image"
                        width={633}
                        height={633}
                    />
                </div>
            </div>
        </section>
    </>  
    )
}