interface SectionHeaderProps {
    title: string
    subtitle: string
}

export default function SectionHeader (prop: SectionHeaderProps) {
    return (
        <>
            <header className="flex flex-col gap-6 md:max-w-[60%]">
                <h4 className="header-title text-left">{prop.title}</h4>
                <h2 className="header-subtitle text-left">{prop.subtitle}</h2>
            </header>
        </>
    )
}