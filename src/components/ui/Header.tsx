import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <Grid container className="flex justify-center items-center mt-8">
      <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        <Grid item className="flex justify-center items-center">
          <Typography className="text-5xl">Weather</Typography>
          <Image src="/logo.png" width={200} height={150} alt="Weather App" className="mx-6" />
          <Typography className="text-5xl">App</Typography>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Header;
