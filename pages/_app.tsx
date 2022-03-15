import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
//import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {

  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  );
}