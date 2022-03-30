import type {NextPage} from 'next'
import {useRouter} from "next/router";
import Container from "../components/Container";

const Home: NextPage = () => {

    return (
        <Container
            title="Home – Darshan Hindocha"
            description="Blog, Art Gallery, and Book Notes"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Darshan Hindocha
                </h1>

                <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                    Currently (as of 30/03/2022), the blog page and blogs are ready. I&apos;ve been looking forward to
                    having this space for a while. I tried medium, but it didn&apos;t hit the spot.
                </p>
                <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                    The direction and topics of the blog are loose for now. My general hope is to increase writing
                    proficiency, and deepen an understanding of the concepts I write about.
                </p>
                <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                    More importantly, writing is a strong motivator to be more thoughtful.
                </p>

                <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                    Book notes and art gallery -- soon to come
                </p>

            </div>

        </Container>
    )
}

export default Home
