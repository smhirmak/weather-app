import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { AxiosClient } from '@/axios';
import IWeather from '@/types/IWeather';
import CityWeather from '@/components/weatherDetail/CityWeather';

const CityPage: React.FC<{ cityWeatherResponse: IWeather }> = ({ cityWeatherResponse }) => {
  return <CityWeather cityWeatherResponse={cityWeatherResponse} />;
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
