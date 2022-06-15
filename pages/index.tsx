import Container from "../components/Container";
import Image from "next/image";
import BlogPost from "../components/BlogPostPreview";
import BookNotePreview from "../components/BookNotePreview";
import {allBlogs, allBookNotes} from "contentlayer/generated";
import {pick} from "../lib/utils";
import {InferGetStaticPropsType} from "next";

export default function Home({posts, bookNotes}: InferGetStaticPropsType<typeof getStaticProps>) {

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
                        Recent Articles
                    </h1>
                    {posts.map(({publishedAt, title, slug, summary}, index) => {
                        return (
                            <BlogPost key={index} title={title} summary={summary} slug={slug}
                                      publishedAt={publishedAt}/>
                        )
                    })}
                </div>
                <div>
                    <h1 className="font-bold text-1xl md:text-2xl tracking-tight mb-4 text-white">
                        Recent Book Notes
                    </h1>
                    {bookNotes.map(({publishedAt, title, slug, summary, recommendation}, index) => {
                        return (
                            <BookNotePreview key={index} title={title} summary={summary} slug={slug}
                                             publishedAt={publishedAt} recommendation={recommendation}/>
                        )
                    })}
                </div>

            </div>

        </Container>
    )
}


export function getStaticProps() {
    const posts: {
        slug: string,
        title: string,
        summary: string,
        publishedAt: string,
    }[] = allBlogs
        .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .slice(0, 3);

    const bookNotes: {
        slug: string,
        title: string,
        summary: string,
        publishedAt: string,
        recommendation: number
    }[] = allBookNotes
        .map((bookNote) => pick(bookNote, ['slug', 'title', 'publishedAt', 'summary', 'recommendation']))
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .slice(0, 2);

    return {props: {posts, bookNotes}};
}