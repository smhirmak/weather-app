import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  return (
    <Container>
      <Head>
        <title>Weather App - Internal Server Error</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Box className="flex flex-col justify-center items-center mt-24">
        <Typography variant={isMobile ? 'h3' : 'h2'}>Oppss..</Typography>
        <Typography variant={isMobile ? 'h4' : 'h2'} className="my-4">
          Internal Server Error
        </Typography>
        <Link href="/">
          <Button variant="outlined" size="large">
            Go Home Page
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
