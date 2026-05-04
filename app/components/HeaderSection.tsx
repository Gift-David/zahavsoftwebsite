interface HeaderProps {
    title: string
    subtitle: string
    img: string
}

export default function HeaderSection (prop: HeaderProps) {
    return (
        <>
            <header
                style={{backgroundImage: `url(${prop.img})`}}
                className={`relative section-container mt-20 lg:mt-26 bg-center h-137.5 bg-cover`}
            >
                <div className="flex flex-col z-1 absolute pt-55 gap-4 md:gap-6 max-w-249.75">
                    <h4 className="font-primary text-foreground text-sm md:text-base">{prop.title}</h4>
                    <h1 className="font-primary text-secondary-foreground text-3xl md:text-5xl lg:text-7xl">{prop.subtitle}</h1>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,32,72,0.4)_0%,rgba(13,32,72,0.8)_78.09%)]"></div>
            </header>
        </>
    )
}
