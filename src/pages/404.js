import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { AxiosClient } from '@/axios';

export default function Custom404() {
  useEffect(() => {
    const errorResponse = AxiosClient.get(`/api/city`).then((res) => res.data);
    console.log('Response404: ', errorResponse.message);
    // alert(cityWeatherResponse.message);
  }, []);
  return (
    <Container>
      <Box className="flex flex-col justify-center items-center mt-24">
        <Typography variant="h2">Oppss..</Typography>
        <Typography variant="h2">Page Not Found</Typography>
      </Box>
    </Container>
  );
}

// export const getServerSideProps = async (context) => {
//   const cityWeatherResponse = await AxiosClient.get(`/api/city`).then((res) => res.data);
//   console.log(cityWeatherResponse);
//   return {
//     props: {
//       cityWeatherResponse
//     }
//   };
// };
