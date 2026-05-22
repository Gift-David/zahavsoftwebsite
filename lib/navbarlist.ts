
export const navbarlist = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        name: 'Services',
        link: '/services',
        subLinks: [
            {
            name: "Branding",
            link: "/services/branding",
        },
            {
            name: "UI/UX Design",
            link: "/services/ui-ux-design",
        },
            {
            name: "Web Development",
            link: "/services/web-development",
        },
    ]
    },
    {
        id: 4,
        name: 'Projects',
        link: '/projects',
    },
    {
        id: 5,
        name: 'Contact Us',
        link: '/contact',
    },
]