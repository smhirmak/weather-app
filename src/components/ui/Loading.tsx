import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

const Loading = () => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  return (
    <Box className={`absolute inset-y-1/2 inset-x-1/3 z-2 ${isMobile ? 'pl-7' : 'pl-56'}`}>
      <CircularProgress size={75} color="error" />
    </Box>
  );
};

export default Loading;
