import React, {useEffect, useRef} from "react";
import type {NextPage} from 'next'
import Container from "../components/Container";
import Image from "next/image";
import BlogPost from "../components/BlogPostPreview";
import BookNotePreview from "../components/BookNotePreview";
import KUTE from "kute.js";


const Home: NextPage = () => {
    const blob1 = useRef(null);
    const blob2 = useRef(null);


    useEffect(() => {
        const tween = KUTE.fromTo(
            blob1.current,
            blob1.current,
            blob2.current,
            {repeat: 999, duration: 3000, yoyo: true}
        )
        tween.start()
    });


    return (
        <Container
            title="Home – Darshan Hindocha"
            description="Blog, Art Gallery, and Book Notes"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <svg className="absolute z-0" id="visual" viewBox="150 0 1000 600" width="600" height="500"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1">
                    <g className="absolute z-0" ref={blob1} id="blob1" transform="translate(448.3394609139988 301.3290914750978)">
                        <path
                            d="M262.3 -154.3C312.1 -65.2 305.4 53.7 252.3 143.5C199.2 233.3 99.6 294.2 -4.3 296.7C-108.3 299.2 -216.5 243.3 -263.9 156.8C-311.2 70.3 -297.7 -46.9 -243.6 -138.5C-189.4 -230 -94.7 -296 5.8 -299.3C106.2 -302.7 212.5 -243.3 262.3 -154.3"
                            fill="#c38636"/>
                    </g>
                    <g  className="absolute z-0" ref={blob2} id="blob2" transform="translate(455.3497915589001 296.38147738165236)"
                       style={{visibility: "hidden"}}>
                        <path
                            d="M244.7 -133.4C298.8 -47.5 311.8 70 264.1 153.3C216.5 236.7 108.3 285.8 2 284.7C-104.2 283.5 -208.4 232 -262.1 145.2C-315.8 58.3 -319 -63.8 -266.9 -148.6C-214.8 -233.4 -107.4 -280.8 -6.1 -277.3C95.3 -273.8 190.5 -219.4 244.7 -133.4"
                            fill="#c38636"/>
                    </g>

                </svg>
                <div className="flex flex-col-reverse sm:flex-row items-start">

                    <div className="flex flex-col pr-8">
                        <div>

                            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                                Darshan Hindocha
                            </h1>
                        </div>
                        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                            Software Engineer at{' '}
                            <span className="font-semibold">AMEX</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-16">
                            Interested in Data Science and Software Engineering
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">

                        <div className="absolute top-0">
                            <Image
                                alt="Darshan Hindocha"
                                width={180}
                                height={180}
                                src="/Avatar1.jpeg"
                                className="rounded-full"
                            />
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-1xl md:text-2xl tracking-tight mb-4 text-black dark:text-white">
                        Recent Activity
                    </h1>
                    <BlogPost
                        title="A Recall Process for Audiobooks"
                        summary="Creating memorable journeys through audiobooks"
                        slug="recalling-information-from-books"/>
                    <BookNotePreview
                        title="Test Book Notes"
                        summary="Just checking to see if this thing works..."
                        slug="test-book-note"/>

                </div>
                <div>
                    <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                        Currently (as of 30/03/2022), the blog page and blogs are ready. I&apos;ve been looking
                        forward
                        to
                        having this space for a while. I tried medium, but it didn&apos;t hit the spot.
                    </p>
                    <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                        The direction and topics of the blog are loose for now. My general hope is to increase
                        writing
                        proficiency, and deepen an understanding of the concepts I write about.
                    </p>
                    <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                        More importantly, writing is a strong motivator to be more thoughtful.
                    </p>

                    <p className="ml-2 text-m text-gray-700 dark:text-gray-300 mt-10">
                        Book notes and art gallery -- soon to come
                    </p>
                </div>

            </div>

        </Container>
    )
}

export default Home
