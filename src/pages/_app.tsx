import { darkTheme } from '@/theme/theme';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Layout from '../components/ui/Layout';
import '../main.css';

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
