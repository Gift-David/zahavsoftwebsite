import Link from "next/link"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Custom404() {
    return (
        <>
            <Navbar />
            <section className="h-full">
                <div className="relative flex gap-14.75 justify-center items-center pt-40 pr-10 pl-10 pb-25 lg:pr-20 lg:pl-20 lg:pb-10">
                    <div className="absolute hero-bg-overlay z-0 inset-0 opacity-20"></div>
                    <div className="flex z-1 flex-col gap-6 md:gap-4 justify-center items-center md:max-w-[60%] lg:max-w-110.75">
                        <h4 className="font-secondary text-foreground text-xl md:text-2xl text-center">ERROR PAGE</h4>
                        <h1 className="font-primary text-foreground text-7xl md:text-9xl text-center">404</h1>
                        <h4 className="font-secondary text-secondary-foreground text-2xl md:text-4xl text-center">Oops, page not found</h4>
                        <p className="font-secondary text-secondary-foreground text-base text-center">The page you're looking for may have been moved, renamed or never existed in the first place. But the rest of our site is very much alive.</p>
                        <Link
                        href={'/'}
                        >
                            <button className="primary-btn">Go to Home</button>
                        </Link>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}