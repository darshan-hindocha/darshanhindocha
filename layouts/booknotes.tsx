import Image from 'next/image';
import {parseISO, format} from 'date-fns';

import Container from 'components/Container';
import type {PropsWithChildren} from 'react';
import ViewCounter from 'components/ViewCounter';
import type { BookNotes } from 'contentlayer/generated';


export default function BookNotesLayout({children, post}: PropsWithChildren<{ post: BookNotes }>) {
    return (
        <Container
            title={`${post.title} – Darshan Hindocha`}
            description={post.summary}
            image={`https://darshanhindocha.vercel.app/${post.image}`}
            date={new Date(post.publishedAt).toISOString()}
            type="article"
        >
            <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    {post.title}
                </h1>
                <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
                    <div className="flex items-center">
                        <Image
                            alt="Darshan Hindocha"
                            height={24}
                            width={24}
                            src="/avatar.jpeg"
                            className="rounded-full"
                        />
                        <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {'Darshan Hindocha / '}
                            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                        {post.readingTime.text}
                        {` • `}
                        <ViewCounter slug={post.slug}/>
                        {` • `}
                        How strongly I recommend it: {post.recommendation}/10
                    </p>
                </div>
                <div className="w-full mt-4 prose dark:prose-dark max-w-none">
                    {children}
                </div>
            </article>
        </Container>
    );
}