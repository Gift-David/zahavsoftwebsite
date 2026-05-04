import { Michroma, Roboto } from "next/font/google";

export const michroma = Michroma ({
    variable: "--font-michroma",
    subsets: ['latin' , 'latin-ext'],
    weight: ['400' , '400'],
})

export const roboto = Roboto ({
    variable: "--font-roboto",
    subsets: ['latin'],
})