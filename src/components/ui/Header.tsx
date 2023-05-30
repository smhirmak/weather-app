import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchBar from '../searchBar/SearchBar';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const { pathname } = useRouter();

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <Grid container className="flex flex-row justify-center items-center mt-8">
      <Grid item xs={8} className="flex justify-center items-center">
        <Box>
          <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            {!isMobile ? (
              <Box className="flex flex-row justify-center items-center">
                <Typography className="text-5xl">Weather</Typography>
                <Image
                  src="/logo.png"
                  priority={true}
                  width={200}
                  height={150}
                  alt="Weather App"
                  className="mx-6"
                />
                <Typography className="text-5xl pr-20">App</Typography>
              </Box>
            ) : (
              <Box className="flex flex-col justify-center items-center">
                <Image
                  src="/logo.png"
                  priority={true}
                  width={150}
                  height={110}
                  alt="Weather App"
                  className="mx-6"
                />
                <Typography className="text-5xl mt-3" noWrap>
                  Weather App
                </Typography>
              </Box>
            )}
          </Link>
        </Box>
      </Grid>
      {!isMobile && (
        <Grid item className="fixed top-12 right-8">
          {pathname !== '/' && <SearchBar />}
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
