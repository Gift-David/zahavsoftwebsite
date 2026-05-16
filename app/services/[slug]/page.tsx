import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HeaderSection from "@/app/components/HeaderSection"
import SectionHeader from "../layout/SectionHeader"
import Image from "next/image";
import { ServiceDetails } from "../lib/service_details"
import { notFound } from "next/navigation"
import CtaSection from "@/app/components/CtaSection";

interface PageProps {
    params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
    return ServiceDetails.map((service) => ({
        slug: service.slug
    }))
}

export default async function ServiceDetailPage ({params}: PageProps) {
    const { slug } = await params

    const service = ServiceDetails.find((item) => item.slug === slug)

    if (!service) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <HeaderSection title={service.header.title} subtitle={service.header.subtitle} img={service.header.img} />

            <section id="sub-services" className="section-container ">
                <div className="flex flex-col gap-10">
                    <SectionHeader title={service.services.headerTitle} subtitle={service.services.headerSubtitle}/>

                    <div className="flex gap-6 flex-wrap">
                        {
                            service.services.servicesCard.map((item, index) => (
                                <div key={index} className="flex flex-col bg-background border border-foreground gap-4 grow min-w-[30%] lg:max-w-[48%]">
                                    <div>
                                        <Image 
                                            src={item.img}
                                            width={628}
                                            height={220}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 p-4">
                                        <h4 className="text-base font-primary text-foreground">{item.title}</h4>
                                        <p className="text-base font-secondary text-secondary-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>


            <section id="service-process" className="section-container bg-background">
                <SectionHeader title={service.process.headerTile} subtitle={service.process.headerSubtitle}/>
    
                <div className="flex md:gap-x-1 gap-y-4 flex-wrap">
                    {
                        service.process.processCard.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row bg-secondary-background hover:bg-[#1C1C1C] border border-foreground gap-4 p-4 grow min-w-[30%] lg:max-w-[48%]">
                                    <div>
                                        <p className="text-base font-primary text-foreground">{item.id}</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-2xl font-primary text-secondary-foreground">{item.title}</h4>
                                        <p className="text-base font-secondary text-secondary-foreground">{item.description}</p>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </section>

            <section id="service-offer" className="section-container">
                <SectionHeader title={service.offers.headerTile} subtitle={service.offers.headerSubtitle}/>

                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                    <div className="border border-foreground">
                        <Image 
                            src={service.offers.sectionImg}
                            width={628}
                            height={600}
                            alt={service.slug}
                        />
                    </div>

                    <div className="flex flex-col md:gap-x-1 gap-y-4 flex-wrap">
                        {
                            service.offers.item.map((item, index) => (
                                <div key={index} className="flex flex-col flex-2 border-b border-foreground pb-6">
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                                        <div>
                                            <Image 
                                                src={item.icon}
                                                width={25}
                                                height={25}
                                                alt={item.title}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <h4 className="text-2xl font-primary text-secondary-foreground">{item.title}</h4>
                                            <p className="text-base font-secondary text-secondary-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                
                </div>
            </section>
                
            <CtaSection />
            <Footer />
        </>
    )
}