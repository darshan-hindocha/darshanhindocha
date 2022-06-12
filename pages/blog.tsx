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
                <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
                    Blog
                </h1>
                <p className="mb-4 text-gray-100">
                    {`I've written ${posts.length} articles on my blog...`}
                </p>
                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl text-white">
                    All Posts
                </h3>
                <BlogPost
                    title="My Favourite Lessons from Poker"
                    summary="There is a lot to learn about decision-making from Poker"
                    slug="poker-lessons"
                />
                <BlogPost
                    title="A Recall Process for Audiobooks"
                    summary="Creating memorable journeys through audiobooks"
                    slug="recalling-information-from-books"
                />
                <BlogPost
                    title="The 4 Basic Steps in Creating a Memory"
                    summary="Wait, I need to pay attention to remember things?!"
                    slug="memory"
                />
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