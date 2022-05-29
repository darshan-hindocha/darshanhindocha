import type {NextPage} from 'next'
import Container from "../components/Container";
import Image from "next/image";
import BlogPost from "../components/BlogPostPreview";
import BookNotePreview from "../components/BookNotePreview";

const Home: NextPage = () => {

    return (
        <Container
            title="Home – Darshan Hindocha"
            description="Blog, Art Gallery, and Book Notes"
        >

            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <div className="flex flex-col-reverse sm:flex-row items-start">
                    <div className="flex flex-col pr-8">
                        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                            Darshan Hindocha
                        </h1>
                        <h2 className="text-gray-300 mb-4">
                            Software Engineer at{' '}
                            <span className="font-semibold">AMEX</span>
                        </h2>
                        <p className="text-gray-100 mb-16">
                            Interested in Data Science and Software Engineering
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                        <Image
                            alt="Darshan Hindocha"
                            width={180}
                            height={180}
                            src="/Avatar1.jpeg"
                            className="rounded-full"
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-1xl md:text-2xl tracking-tight mb-4 text-white">
                        Recent Activity
                    </h1>
                    <BlogPost
                        title="A Recall Process for Audiobooks"
                        summary="Creating memorable journeys through audiobooks"
                        slug="recalling-information-from-books"
                    />
                    <BookNotePreview
                        title="Test Book Notes"
                        summary="Just checking to see if this thing works..."
                        slug="test-book-note"
                    />

                </div>

            </div>

        </Container>
    )
}

export default Home
