import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
const desktopImages = [
  '/raining-h.jpg',
  '/clear-sky-h.jpg',
  '/clouds-h.jpg',
  '/thunderstorm-h.jpg',
  '/snowing-h.jpg',
  '/foggy-h.jpg'
];
const mobileImages = [
  '/raining-v.jpg',
  '/clear-sky-v.jpg',
  '/clouds-v.jpg',
  '/thunderstorm-v.jpg',
  '/snowing-v.jpg',
  '/foggy-v.jpg'
];

const WeatherImage: React.FC<{ rawDescription: string }> = ({ rawDescription }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <>
      {rawDescription.includes('rain') ? (
        <img
          src={isMobile ? mobileImages[0] : desktopImages[0]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0 min-w-full min-h-full -z-10 opacity-70"
          alt="Raining"
        />
      ) : (
        ''
      )}
      {rawDescription.includes('clear') ? (
        <img
          src={isMobile ? mobileImages[1] : desktopImages[1]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0 min-w-full min-h-full -z-10 opacity-70"
          alt="Clear Sky"
        />
      ) : (
        ''
      )}
      {rawDescription.includes('clouds') ? (
        <img
          src={isMobile ? mobileImages[2] : desktopImages[2]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0 min-w-full min-h-full -z-10 opacity-70"
          alt="Cloudy"
        />
      ) : (
        ''
      )}
      {rawDescription.includes('thunderstorm') ? (
        <img
          src={isMobile ? mobileImages[3] : desktopImages[3]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0 min-w-full min-h-full -z-10 opacity-70"
          alt="Thunderstorm"
        />
      ) : (
        ''
      )}
      {rawDescription.includes('snow') ? (
        <img
          src={isMobile ? mobileImages[4] : desktopImages[4]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0"
          alt="Snowing"
        />
      ) : (
        ''
      )}
      {rawDescription.includes('mist') ? (
        <img
          src={isMobile ? mobileImages[5] : desktopImages[5]}
          width={isMobile ? 200 : 1920}
          height={isMobile ? 200 : 1080}
          className="fixed right-0 bottom-0"
          alt="Mist"
        />
      ) : (
        ''
      )}
    </>
  );
};

export default WeatherImage;
