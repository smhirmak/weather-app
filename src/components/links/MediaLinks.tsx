import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const MediaLinks: React.FC<{ href: string; icon?: any; name: string }> = ({ href, icon, name }) => {
  return (
    <>
      <Link
        href={href}
        underline="hover"
        color={'#d3d3d3'}
        className="flex- justify-center items-center"
        target="_blank">
        {' '}
        <Box display={'flex'}>
          {icon} <Typography variant="subtitle1">{name}</Typography>
        </Box>
      </Link>
    </>
  );
};

export default MediaLinks;
