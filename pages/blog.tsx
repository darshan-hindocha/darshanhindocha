import Container from "components/Container";
import BlogPost from 'components/BlogPostPreview';
import {allBlogs} from 'contentlayer/generated';
import {pick} from 'lib/utils';
import {InferGetStaticPropsType} from 'next';

export default function Blog({
                                 posts
                             }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <Container
            title="Blog – Darshan Hindocha"
            description="Thoughts on Maths, Coding, Art, Music and Meditation"
        >
            <div className="flex flex-col items-left justify-around w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Blog
                </h1>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {`I've written ${posts.length} articles on my blog...`}
                </p>
                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
                    All Posts
                </h3>
                <BlogPost
                    title="Test Post!"
                    summary="This is a test post! Does it work?!?"
                    slug="test"
                />
            </div>
        </Container>
    )
}

export function getStaticProps() {
    const posts = allBlogs
        .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        );

    return {props: {posts}};
}