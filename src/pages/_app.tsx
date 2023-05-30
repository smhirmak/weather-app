import type { AppProps } from 'next/app';
import '../main.css';
import { EmotionCache } from '@emotion/react';
import Layout from '../components/ui/Layout';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '@/theme/theme';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const cache = createCache({
  key: 'css',
  prepend: true
});

export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={darkTheme}>
      <div id="__next">
        <CssBaseline />
        <CacheProvider value={cache}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
      </div>
    </ThemeProvider>
  );
}
