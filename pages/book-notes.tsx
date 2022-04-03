import Container from "components/Container";
import BookNotePreview from 'components/BookNotePreview';
import {allBookNotes} from 'contentlayer/generated';
import {pick} from 'lib/utils';
import {InferGetStaticPropsType} from 'next';

export default function BookNotes({
                                 posts
                             }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container
            title="Book Notes – Darshan Hindocha"
            description="Book Notes and Summaries"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Book Notes
                </h1>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {`I've written ${posts.length} book notes so far`}
                </p>
                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
                    All Book Notes
                </h3>
                <BookNotePreview
                    title="Test Book Notes"
                    summary="Just checking to see if this thing works..."
                    slug="test-book-note"
                />
            </div>
        </Container>
    )
}

export function getStaticProps() {
    const posts = allBookNotes
        .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        );

    return {props: {posts}};
}