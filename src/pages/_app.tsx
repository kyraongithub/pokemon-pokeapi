import QueryClientProviderWrapper from '@/components/container/wrapper';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProviderWrapper>
      {' '}
      <Component {...pageProps} />
    </QueryClientProviderWrapper>
  );
}
