import React from "react";

export const Section: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <section>
            <h1>{ title }</h1>
            { children }
        </section>
    )
}