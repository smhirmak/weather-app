import { darkTheme } from '@/theme/theme';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useState } from 'react';
import Layout from '../components/ui/Layout';
import '../main.css';
import Loading from '@/components/ui/Loading';

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
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

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
          <Layout>
            {loading && <Loading />}
            <Component {...pageProps} isRouteLoading={loading} />
          </Layout>
        </CacheProvider>
      </div>
    </ThemeProvider>
  );
}
