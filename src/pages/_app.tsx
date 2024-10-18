import Loading from '@/components/ui/Loading';
import { darkTheme } from '@/theme/theme';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useState } from 'react';
import Layout from '../components/ui/Layout';
import '../main.css';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  loading: boolean;
}

const cache = createCache({
  key: 'css',
  prepend: true
});

export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div id="__next">
        <CssBaseline />
        <CacheProvider value={cache}>
          {loading && <Loading />}
          <Layout>
            <div style={{ flexGrow: '1' }}>
              <Component {...pageProps} isRouteLoading={loading} />
            </div>
          </Layout>
        </CacheProvider>
      </div>
    </ThemeProvider>
  );
}
