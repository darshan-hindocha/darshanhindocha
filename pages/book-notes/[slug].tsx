import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import BookNotesLayout from "layouts/booknotes";
import { allBookNotes } from 'contentlayer/generated';
import type { BookNotes } from 'contentlayer/generated';

export default function BookNote({ post }: { post: BookNotes }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BookNotesLayout post={post}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BookNotesLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBookNotes.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBookNotes.find((post) => post.slug === params.slug);
  return { props: { post } };
}