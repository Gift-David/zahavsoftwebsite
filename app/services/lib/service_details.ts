interface ServiceDetailsProp {
    slug: string,
    header: {
        title: string,
        subtitle: string,
        img: string,
    },
    offer: {
        des: string,
        btnTxt: string,
    },
    services: {
        headerTitle: string,
        headerSubtitle: string,
        servicesCard: {
            img: string,
            title: string,
            description: string,
        }[],
    },
    process: {
        headerTile: string,
        headerSubtitle: string,
        processCard: {
            id: string,
            title: string,
            description: string,
        }[],
    },
    offers: {
        headerTile: string,
        headerSubtitle: string,
        sectionImg: string,
        item: {
            icon: string,
            title: string,
            description: string,
        }[],
    }
}



export const ServiceDetails:ServiceDetailsProp[] = [
    {
    slug: "branding",
    header: {
        title: "PRODUCT BRANDING",
        subtitle: "Your brand is the promise that your business delivers",
        img: "/images/product-branding-header.png",
    },
    offer: {
        des: "“We create software that doesn't just give your business online visibility. It automates your business processes and drive sales . It starts with a brand people trust”",
        btnTxt: "Get Free Consultation",
    },
    services: {
        headerTitle: "WHAT IS INCLUDED",
        headerSubtitle: "Three services. One cohesive brand identity",
        servicesCard: [
            {
            img: "/images/branding-logo.png",
            title: "Logo Design",
            description: "A distinctive, scalable logo that works everywhere; from a business card to a billboard. Delivered in all formats with a comprehensive usage guide so your brand is always used correctly.",
        },
            {
            img: "/images/brand-identity.png",
            title: "Brand Identity Design",
            description: "A complete visual system: colour palette, typography, iconography, patterns, and brand guidelines that ensures that your brand looks consistent and intentional across every touchpoint",
        },
            {
            img: "/images/branding-sm-design.png",
            title: "Social Media Designs",
            description: "Scroll stopping social media assets and profile setup across your key platforms. Branded templates that your team can use to stay visually consistent long after the project wraps",
        },
        ]
    },
    process: {
        headerTile: "OUR BRANDING PROCESS",
        headerSubtitle: "A discipline process that turns vision into identity.",
        processCard: [
            {
            id: "01",
            title: "Brand Discovery",
            description: "We start by understanding your business your market, your competitors, your audience, and the feeling you want your brand to create. We don't design until we understand.",
        },
            {
            id: "02",
            title: "Direction and Positioning",
            description: "We define your brand positioning. What makes you different, who you're for, and how you should be perceived. Then we present creative directions before committing to one.",
        },
            {
            id: "03",
            title: "Design and Refinement",
            description: "We design your logo, visual system, and assets then refine them through structured feedback rounds until every element is right. Precision over speed, always.",
        },
            {
            id: "04",
            title: "Delivery and Handoff",
            description: "You receive a complete brand package. All files, all formats, and a brand guidelines document so your brand is always applied correctly, by anyone on your team.",
        },
        ]
    },
    offers: {
        headerTile: "WHAT YOU WALK AWAY WITH",
        headerSubtitle: "Everything you'll get",
        sectionImg: "/images/branding-offer-section.png",
        item: [
            {
            icon: "/icon/offer-icon-1.png",
            title: "Logo Suite",
            description: "Primary, secondary, and icon versions of your logo in all file formats: PNG, SVG, PDF, and editable source files.",
        },
            {
            icon: "/icon/offer-icon-2.png",
            title: "Colour System",
            description: "A defined primary and secondary color palette with HEX, RGB, and CMYK values for digital and print use.",
        },
            {
            icon: "/icon/offer-icon-3.png",
            title: "Typography Guidelines",
            description: "Selected and licensed font pairings with usage rules for headings, body text, and UI contexts.",
        },
            {
            icon: "/icon/offer-icon-4.png",
            title: "Brand Guidelines Document",
            description: "A comprehensive PDF guide covering logo usage, color, typography, tone of voice, and do's and don'ts.",
        },
        ],
    }
},

    {
    slug: "ui-ux-design",
    header: {
        title: "UI / UX DESIGN",
        subtitle: "Interfaces that feel like they were built just for your user",
        img: "/images/ui-ux-header.png",
    },
    offer: {
        des: "\"We create software that doesn't just give your business online visibility. It automates your business processes and drive sales. It starts with a brand people trust\"",
        btnTxt: "Start A Design Project",
    },
    services: {
        headerTitle: "DESIGN SERVICE",
        headerSubtitle: "Three specialisations. One obsession with user experience",
        servicesCard: [
            {
            img: "/images/web-design.png",
            title: "Website Design (UI/UX)",
            description: "Your website keeps your business running 24/7. We design websites that builds trust on the first scroll, guide visitors with clarity, and convert browsers into paying clients",
        },
            {
            img: "/images/mobile-design.png",
            title: "Mobile App Design (UI/UX)",
            description: "People make snap decisions on their phones . We design mobile experiences  that are fast  to grasp, impossible to put down, and optimised for the specific platform your users are on",
        },
            {
            img: "/images/prototyping.png",
            title: "Software Prototyping",
            description: "Validate your idea before a single line of code is written. We build high-fidelity interactive prototypes that you can test with real users  saving you time, monety and  the cost of building the wrong thing.",
        },
        ]
    },
    process: {
        headerTile: "HOW WE DESIGN",
        headerSubtitle: "A research-led process that always put your users first",
        processCard: [
            {
            id: "01",
            title: "User Reasearch",
            description: "We study your target users, their goals, frustrations,, behaviours and mental models. Real insights not assumptions. This is what seperate designs that performs from designs that just exist.",
        },
            {
            id: "02",
            title: "Information Architecture",
            description: "We map out the structure of your product, how content is organised, how users navigate, and how every screen connects to the next. The skeleton before the skin.",
        },
            {
            id: "03",
            title: "Wireframing",
            description: "Low-fidelity wireframes help us validate structure, user flow, and functionality early in the design process before visuals like colours and typography shape user perception.",
        },
            {
            id: "04",
            title: "High-Fidelity UI Design",
            description: "High-fidelity designs crafted in Figma every component, interaction, and state thoughtfully designed for consistency and precision. What you approve is exactly what gets built.",
        },
            {
            id: "05",
            title: "Prototype and Testing",
            description: "A fully interactive prototype lets you experience the product before development begins. We test it with real users and refine based on what we learn.",
        },
            {
            id: "06",
            title: "Developer Handoff",
            description: "We deliver annotated, organised Figma files with all specs, assets, and component documentation your developers need to build exactly what was designed.",
        },
        ]
    },
    offers: {
        headerTile: "WHAT YOU RECEIVE",
        headerSubtitle: "Handoff-ready. Production-perfect",
        sectionImg: "/images/ui-ux-offer-section.png",
        item: [
            {
            icon: "/icon/offer-icon-1.png",
            title: "User research Report",
            description: "Documented findings from user research, personas, and journey maps which is the foundation every design decision is built on",
        },
            {
            icon: "/icon/offer-icon-2.png",
            title: "Wireframes",
            description: "Low-fidelity wireframes of all screens and flows which makes it fast to iterate, aligned before visual design begins",
        },
            {
            icon: "/icon/offer-icon-3.png",
            title: "High-Fidelity Figma Designs",
            description: "Polished pixel-perfect UI screens for every page and state complete with your design system and component library",
        },
            {
            icon: "/icon/offer-icon-4.png",
            title: "Interactive Prototyping",
            description: "A clickable prototype you can share with your stakeholders, test with users and use to validate the experience before development",
        },
            {
            icon: "/icon/offer-icon-5.png",
            title: "Interactive Prototyping",
            description: "Annotated Figma file with all measurements, colours, fonts and assets basically everything your developer needs to build it right.",
        },
        ],
    }
},

    {
    slug: "",
    header: {
        title: "",
        subtitle: "",
        img: "",
    },
    offer: {
        des: "",
        btnTxt: "",
    },
    services: {
        headerTitle: "",
        headerSubtitle: "",
        servicesCard: [
            {
            img: "",
            title: "",
            description: "",
        },
        ]
    },
    process: {
        headerTile: "",
        headerSubtitle: "",
        processCard: [
            {
            id: "",
            title: "",
            description: "",
        },
        ]
    },
    offers: {
        headerTile: "",
        headerSubtitle: "",
        sectionImg: "",
        item: [
            {
            icon: "",
            title: "",
            description: "",
        },
        ],
    }
},

]