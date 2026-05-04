"use client"
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";

export default function ProjectSection () {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, handleSubmit, reset] = useForm("mojrezbd");
    useEffect (() => {
            if (state.succeeded) {
                alert("Form Submitted Successfully");
                formRef.current?.reset();
                reset();
        }
        }, [reset, state.succeeded]);

    return (
        <>
            <section id="projects" className="section-container flex flex-col justify-center items-center gap-10 pt-50 pb-20  text-center">
                    <div className="flex flex-col gap-10 max-w-184.5 justify-center text-center">
                        <h1 className="font-primary text-secondary-foreground text-center text-4xl md:text-6xl lg:text-7xl">Something bold is being built</h1>
                        <h4 className="font-secondary text-secondary-foreground text-center text-xl md:text-2xl">Be the first to know when we launch.  Drop your email and we'll reach out the moment it is ready</h4>
                    </div>

                    <div className="flex flex-col gap-2 justify-center w-full items-center">
                        <form ref={formRef} action="" onSubmit={handleSubmit} className="flex justify-center">
                            <input name="email" type="email" placeholder="Enter your email address" required className="bg-background"/>
                            <button type="submit" className="primary-btn pt-0 pb-0 items-center">Notify Me</button>
                        </form>
                        <p className="font-secondary text-secondary-foreground text-sm text-center">No spam, no noise. Just one email when when we are ready</p>
                    </div>
            </section>
        </>
    )
}