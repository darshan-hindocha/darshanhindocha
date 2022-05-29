import Head from "next/head";
import Container from "../components/Container";

export default function About() {
    return (
        <Container
            title={`About – Darshan Hindocha`}
            description={"About Darshan Hindocha"}
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
                    Under Construction
                </h1>
            </div>
        </Container>
    )
}