import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControlLabel, Grid, Slide, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';

const Header = () => {
  const { pathname } = useRouter();

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Grid container className="flex flex-row justify-center items-center mt-8">
      <Grid item xs={12} className="flex justify-center items-center">
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

      <Grid item className="flex justify-center items-center">
        {pathname !== '/' && (
          <Box>
            <Box>
              <FormControlLabel
                className={
                  isMobile ? 'flex justify-center items-center mt-4' : 'fixed top-24 right-24'
                }
                control={
                  !checked ? <SearchIcon onClick={handleChange} fontSize="large" /> : <Box />
                }
                label=""
              />
              <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                <Box sx={{ m: isMobile ? -3 : 1 }}>
                  <SearchBar setChecked={setChecked} />
                </Box>
              </Slide>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
