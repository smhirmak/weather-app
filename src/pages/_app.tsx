import { darkTheme } from '@/theme/theme';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, Box, ThemeProvider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
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
            {loading && (
              <Box
                className={
                  isMobile
                    ? 'fixed inset-y-1/2 inset-x-1/3 pl-8 z-2'
                    : 'fixed inset-y-1/2 inset-x-1/3 pl-56 z-2'
                }>
                <CircularProgress size={75} />
              </Box>
            )}
            <Component {...pageProps} isRouteLoading={loading} />
          </Layout>
        </CacheProvider>
      </div>
    </ThemeProvider>
  );
}
