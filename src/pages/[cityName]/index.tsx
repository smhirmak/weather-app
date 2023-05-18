import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { AxiosClient } from '@/axios';
import IWeather from '@/types/IWeather';
import { Box, Typography } from '@mui/material';

const CityPage: React.FC<{ cityWeatherResponse: IWeather }> = ({ cityWeatherResponse }) => {
  return (
    <Box>
      <Typography>{cityWeatherResponse.name}</Typography>
      <Typography>{Math.round(cityWeatherResponse.main.temp)}</Typography>
      <Typography>{Math.round(cityWeatherResponse.main.feels_like)}</Typography>
    </Box>
  );
};

export default CityPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params?.cityName;

  const cityWeatherResponse = await AxiosClient.get(`/api/city/${params}`).then((res) => res.data);
  return {
    props: {
      cityWeatherResponse
    }
  };
};
