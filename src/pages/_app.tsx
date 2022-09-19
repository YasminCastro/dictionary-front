import { AuthProvider } from '@/providers/AuthContext';
import { WordProvider } from '@/providers/WordProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <WordProvider>
          <Component {...pageProps} />
        </WordProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
