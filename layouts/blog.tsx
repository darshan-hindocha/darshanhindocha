import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';


export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (

  );
}