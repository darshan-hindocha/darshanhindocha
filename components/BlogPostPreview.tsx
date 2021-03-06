import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import {Views} from 'lib/types';
import type {Blog} from 'contentlayer/generated';

export default function BlogPostPreview({
                                            title,
                                            summary,
                                            slug,
                                            publishedAt
                                        }: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt'>) {
    const {data} = useSWR<Views>(`/api/views/${slug}`, fetcher);
    const views = data?.total;

    return (
        <Link href={`/blog/${slug}`}>
            <a className="w-full">
                <div className="w-full mb-8 p-6 rounded-lg bg-gray-700 hover:bg-gray-800">
                    <div className="flex flex-col justify-between md:flex-row">
                        <h4 className="w-full mb-2 text-lg font-medium md:text-xl text-gray-100">
                            {title}
                        </h4>
                        <p className="w-32 mb-4 text-left text-green-mid md:text-right md:mb-0">
                            {`${views ? new Number(views).toLocaleString() : '–––'} views`}
                        </p>
                    </div>
                    <p className="text-gray-300  mb-2">{summary}</p>
                    {!!(publishedAt) &&
                        <p className="text-gray-200">{(new Date(publishedAt)).toDateString()}</p>
                    }
                </div>
            </a>
        </Link>
    );
}