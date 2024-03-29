import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import MediaLinks from '../links/MediaLinks';

const Footer = () => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  const { asPath } = useRouter();
  return (
    <footer>
      <Box
        sx={{ width: '100%' }}
        className={
          asPath !== '/' ? 'relative bottom-0 left-0 mb-5 mt-20' : 'absolute bottom-0 left-0 mb-5'
        }>
        <Grid container className="flex justify-center" columnSpacing={isMobile ? 3 : 20}>
          <Grid item>
            <Box>
              <Typography variant={isMobile ? 'h6' : 'h5'} color={'#fff'} mb={2}>
                Social Media
              </Typography>
              <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                <MediaLinks
                  href="https://github.com/smhirmak"
                  name="GitHub"
                  icon={<GitHubIcon className="mr-2" />}
                />
                <MediaLinks
                  href="https://www.linkedin.com/in/muhammed-semih-irmak-307890152/"
                  name="LinkedIn"
                  icon={<LinkedInIcon className="mr-2" />}
                />
                <MediaLinks
                  href="https://twitter.com/smhirmak"
                  name="Twitter"
                  icon={<XIcon className="mr-2" />}
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
              <Typography variant={isMobile ? 'h6' : 'h5'} color={'#fff'} mb={2}>
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
              <Typography variant={isMobile ? 'h6' : 'h5'} color={'#fff'} mb={2}>
                Help
              </Typography>
              <MediaLinks href="/" name="FAQ" />
              <MediaLinks href="/" name="Your Asistant" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
