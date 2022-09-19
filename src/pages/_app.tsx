import { AuthProvider } from '@/providers/AuthContext';
import { RenderProvider } from '@/providers/RenderWordsContainerProvider';
import { WordProvider } from '@/providers/WordProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <WordProvider>
          <RenderProvider>
            <Component {...pageProps} />
          </RenderProvider>
        </WordProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
