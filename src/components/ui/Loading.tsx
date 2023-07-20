import { Box, Container, useMediaQuery } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

const Loading = () => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#3b3b3b',
        position: 'fixed',
        opacity: 0.6,
        zIndex: 99
      }}>
      <Box
        className={`absolute inset-y-1/2 inset-x-1/3 z-2 bg-gray-500 ${
          isMobile ? 'pl-7' : 'pl-56'
        }`}>
        <CircularProgress size={75} color="error" />
      </Box>
    </div>
  );
};

export default Loading;
