import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControlLabel, Grid, Slide, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchAutoComplete from '../searchBar/SearchAutoComplete';
import DownloadAppButton from '../buttons/DownloadAppButton';

const Header = () => {
  const { pathname } = useRouter();

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <header>
      <Link
        href={'https://github.com/smhirmak/weather-app'}
        style={{
          textDecoration: 'none',
          color: 'black',
          position: 'absolute',
          top: isMobile ? 10 : 35,
          left: isMobile ? 10 : 5,
          rotate: '315deg'
        }}>
        <Box className="flex flex-col justify-center items-center">
          <GitHubIcon fontSize="large" sx={{ color: '#d1d5db' }} />
          {!isMobile && (
            <Typography variant="subtitle2" color={'white'}>
              Open Source Code
            </Typography>
          )}
        </Box>
      </Link>
      <Grid container className="flex flex-row justify-center items-center pt-8">
        <Grid item xs={11.3} className="flex justify-center items-center">
          <Box>
            <Link href={'/'} className="no-underline text-white">
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

        <Grid item className="flex justify-center items-center ">
          {pathname !== '/' && (
            <Box className="flex justify-center items-center">
              <FormControlLabel
                className={isMobile ? 'flex justify-center items-center mt-4' : 'contents '}
                control={
                  !checked ? (
                    <SearchIcon onClick={handleChange} fontSize="large" className="mr-1 mb-5" />
                  ) : (
                    <Box />
                  )
                }
                label={''}
                labelPlacement="bottom"
              />
              <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                <Box className={isMobile ? 'mt-5' : ' mt-5'}>
                  <SearchAutoComplete />
                </Box>
              </Slide>
            </Box>
          )}
        </Grid>
      <DownloadAppButton />
      </Grid>
    </header>
  );
};

export default Header;
