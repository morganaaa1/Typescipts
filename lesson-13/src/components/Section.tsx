import React, { ReactNode } from "react";

type SectionProps = {
    title?: string;
    children: ReactNode;
}

export const Section = ({ title = "My Subheading", children }: SectionProps) => {
    return (
        <section>
            <h1>{ title }</h1>
            { children }
        </section>
    )
}
