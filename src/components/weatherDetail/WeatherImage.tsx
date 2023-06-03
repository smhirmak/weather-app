import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
// const desktopImages = [
//   '/raining-h.jpg',
//   '/clear-sky-h.jpg',
//   '/clouds-h.jpg',
//   '/thunderstorm-h.jpg',
//   '/snowing-h.jpg',
//   '/foggy-h.jpg'
// ];
const desktopImages = [
  'https://images.pexels.com/photos/989941/pexels-photo-989941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1647177/pexels-photo-1647177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3462588/pexels-photo-3462588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/845619/pexels-photo-845619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];
const mobileImages = [
  'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2096795/pexels-photo-2096795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2947810/pexels-photo-2947810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/909253/pexels-photo-909253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1061623/pexels-photo-1061623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
