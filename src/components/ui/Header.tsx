import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchBar from '../searchBar/SearchBar';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <Grid container className="flex flex-row justify-center items-center mt-8">
      <Grid item xs={8} className="fixed top-12 inset-x-1/2">
        <Box>
          <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
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
          </Link>
        </Box>
      </Grid>
      {/* <Grid item className="absolute right-14 top-14"> */}
      <Grid item className="fixed top-12 right-8">
        {/* <Grid item className="flex justify-end items-center" xs={4}> */}
        {pathname !== '/' && <SearchBar />}
      </Grid>
    </Grid>
  );
};

export default Header;
