import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import MediaLinks from '../links/MediaLinks';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container display={'flex'} justifyContent={'center'} columnSpacing={20} mb={4}>
        <Grid item>
          <Box>
            <Typography variant="h5" color={'#fff'} mb={2}>
              Social Media
            </Typography>
            <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
              <MediaLinks
                href="https://github.com/smhirmak"
                name="GitHub"
                icon={<GitHubIcon sx={{ mr: 1 }} />}
              />
              <MediaLinks
                href="https://www.linkedin.com/in/muhammed-semih-irmak-307890152/"
                name="LinkedIn"
                icon={<LinkedInIcon sx={{ mr: 1 }} />}
              />
              <MediaLinks
                href="https://twitter.com/smhirmak"
                name="Twitter"
                icon={<TwitterIcon sx={{ mr: 1 }} />}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Typography variant="h5" color={'#fff'} mb={2}>
              About
            </Typography>
            <MediaLinks
              href="https://www.linkedin.com/in/muhammed-semih-irmak-307890152/"
              name={'Who am I?'}
            />
            <Typography>Contact me</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Typography variant="h5" color={'#fff'} mb={2}>
              Help
            </Typography>
            <MediaLinks href="/" name="FAQ" />
            <MediaLinks href="/" name="Your Asistant" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
