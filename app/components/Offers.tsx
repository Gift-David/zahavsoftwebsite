import { offerlist } from "@/lib/offerlists"
import Link from "next/link"

export default function Offers() {
    const branding_offers = offerlist.filter(offer => offer.category=== 'branding')
    const design_offers = offerlist.filter(offer => offer.category=== 'design')
    const webdev_offers = offerlist.filter(offer => offer.category=== 'webdev')
    const mobiledev_offers = offerlist.filter(offer => offer.category=== 'mobiledev')
    return (
        <>
            <section id="offers" className="section-container flex-col justify-center lg:h-[2590]">
                <div className="flex flex-col border-b border-foreground pb-16 justify-center gap-10">
                    <div className="section-header justify-center items-center max-w-153.5 self-center">
                        <h4 className="header-title">ALL PACKAGES AT A GLANCE</h4>
                        <h4 className="header-subtitle">Everything we offer, side by side</h4>
                    </div>

                    <div className="flex flex-col gap-13.5">

                        <div className="flex flex-col gap-10">
                            <div className="flex gap-1 items-center">
                                <h6 className="primary-btn min-w-62 pl-1 pr-1 md:min-w-77">PRODUCT BRANDING</h6>
                                <p className="border-[0.5px] border-foreground h-0 w-full"></p>
                            </div>
                            <div className="flex gap-6 flex-wrap">
                                {branding_offers.map((offer, index) => (
                                    <div key={index} className="card gap-8 grow min-w-[30%] lg:max-w-[50%]">
                                        <div className="border-b border-b-foreground pb-4">
                                            <h6 className="font-primary lg:text-2xl text-secondary-foreground">{offer.title}</h6>
                                        </div>
                        
                                        <ul className="flex flex-col gap-4">
                                            {offer.items.map((item, index) => (
                                                <li key={index} className="flex gap-4 font-secondary text-base text-secondary-foreground items-center">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 8.00003C15.0004 8.131 14.9748 8.26075 14.9247 8.38176C14.8746 8.50277 14.801 8.61265 14.7081 8.70503L8.705 14.7088C8.51764 14.895 8.26419 14.9996 8 14.9996C7.73582 14.9996 7.48237 14.895 7.295 14.7088L1.295 8.70503C1.10875 8.51767 1.00421 8.26422 1.00421 8.00003C1.00421 7.73585 1.10875 7.48239 1.295 7.29503L7.29813 1.29128C7.48549 1.10503 7.73894 1.00049 8.00313 1.00049C8.26732 1.00049 8.52077 1.10503 8.70813 1.29128L14.7113 7.29503C14.8035 7.38767 14.8766 7.49766 14.9261 7.61866C14.9757 7.73966 15.0008 7.86928 15 8.00003Z" fill="#FFF49B"/>
                                                    </svg>

                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={'/contact'}>
                                            <button className="secondary-btn w-full">Get Started</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-1 items-center">
                                <h6 className="primary-btn min-w-57">UI/UX DESIGN</h6>
                                <p className="border-[0.5px] border-foreground h-0 w-full"></p>
                            </div>
                            <div className="flex gap-6 flex-wrap">
                                {design_offers.map((offer, index) => (
                                    <div key={index} className="card gap-8 grow min-w-[30%] lg:max-w-[50%] ">
                                        <div className="border-b border-b-foreground pb-4">
                                            <h6 className="font-primary lg:text-2xl text-secondary-foreground">{offer.title}</h6>
                                        </div>
                                        <ul className="flex flex-col gap-4">
                                            {offer.items.map((item, index) => (
                                                <li key={index} className="flex gap-4 font-secondary text-base text-secondary-foreground items-center">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 8.00003C15.0004 8.131 14.9748 8.26075 14.9247 8.38176C14.8746 8.50277 14.801 8.61265 14.7081 8.70503L8.705 14.7088C8.51764 14.895 8.26419 14.9996 8 14.9996C7.73582 14.9996 7.48237 14.895 7.295 14.7088L1.295 8.70503C1.10875 8.51767 1.00421 8.26422 1.00421 8.00003C1.00421 7.73585 1.10875 7.48239 1.295 7.29503L7.29813 1.29128C7.48549 1.10503 7.73894 1.00049 8.00313 1.00049C8.26732 1.00049 8.52077 1.10503 8.70813 1.29128L14.7113 7.29503C14.8035 7.38767 14.8766 7.49766 14.9261 7.61866C14.9757 7.73966 15.0008 7.86928 15 8.00003Z" fill="#FFF49B"/>
                                                    </svg>

                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={'/contact'}>
                                            <button className="secondary-btn w-full">Get Started</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-1 items-center">
                                <h6 className="primary-btn min-w-62 pr-1 pl-1 md:min-w-112.25">WEB AND MOBILE DEVELOPMENT</h6>
                                <p className="border-[0.5px] border-foreground h-0 w-full"></p>
                            </div>
                            <div className="flex gap-6 flex-wrap">
                                {webdev_offers.map((offer, index) => (
                                    <div key={index} className="card gap-8 grow min-w-full lg:min-w-[30%] lg:max-w-[30%] ">
                                        <div className="border-b border-b-foreground pb-4">
                                            <h6 className="font-primary lg:text-2xl text-secondary-foreground">{offer.title}</h6>
                                        </div>
                                        <ul className="flex flex-col gap-4">
                                            {offer.items.map((item, index) => (
                                                <li key={index} className="flex gap-4 font-secondary text-base text-secondary-foreground items-center">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 8.00003C15.0004 8.131 14.9748 8.26075 14.9247 8.38176C14.8746 8.50277 14.801 8.61265 14.7081 8.70503L8.705 14.7088C8.51764 14.895 8.26419 14.9996 8 14.9996C7.73582 14.9996 7.48237 14.895 7.295 14.7088L1.295 8.70503C1.10875 8.51767 1.00421 8.26422 1.00421 8.00003C1.00421 7.73585 1.10875 7.48239 1.295 7.29503L7.29813 1.29128C7.48549 1.10503 7.73894 1.00049 8.00313 1.00049C8.26732 1.00049 8.52077 1.10503 8.70813 1.29128L14.7113 7.29503C14.8035 7.38767 14.8766 7.49766 14.9261 7.61866C14.9757 7.73966 15.0008 7.86928 15 8.00003Z" fill="#FFF49B"/>
                                                    </svg>

                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={'/contact'}>
                                            <button className="secondary-btn w-full">Get Started</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-1 items-center">
                                <h6 className="primary-btn md:min-w-[384px]">MOBILE APP DEVELOPMENT</h6>
                                <p className="border-[0.5px] border-foreground h-0 w-full"></p>
                            </div>
                            <div className="flex gap-6 flex-wrap">
                                {mobiledev_offers.map((offer, index) => (
                                    <div key={index} className="card gap-8 grow min-w-[30%] lg:max-w-[50%]">
                                        <div className="border-b border-b-foreground pb-4">
                                            <h6 className="font-primary lg:text-2xl text-secondary-foreground">{offer.title}</h6>
                                        </div>
                                        <ul className="flex flex-col gap-4  ">
                                            {offer.items.map((item, index) => (
                                                <li key={index} className="flex gap-4 font-secondary text-base text-secondary-foreground items-center">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 8.00003C15.0004 8.131 14.9748 8.26075 14.9247 8.38176C14.8746 8.50277 14.801 8.61265 14.7081 8.70503L8.705 14.7088C8.51764 14.895 8.26419 14.9996 8 14.9996C7.73582 14.9996 7.48237 14.895 7.295 14.7088L1.295 8.70503C1.10875 8.51767 1.00421 8.26422 1.00421 8.00003C1.00421 7.73585 1.10875 7.48239 1.295 7.29503L7.29813 1.29128C7.48549 1.10503 7.73894 1.00049 8.00313 1.00049C8.26732 1.00049 8.52077 1.10503 8.70813 1.29128L14.7113 7.29503C14.8035 7.38767 14.8766 7.49766 14.9261 7.61866C14.9757 7.73966 15.0008 7.86928 15 8.00003Z" fill="#FFF49B"/>
                                                    </svg>

                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={'/contact'}>
                                            <button className="secondary-btn w-full">Get Started</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}