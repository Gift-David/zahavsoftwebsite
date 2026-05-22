import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <h1>Opppps! Page Not Found</h1>
            <Link
                href={'/'}
            >
                Back to Home
            </Link>
        </>
    )
}