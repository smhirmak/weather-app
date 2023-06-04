import { AxiosClient } from '@/axios';
import CityWeather from '@/components/weatherDetail/CityWeather';
import IWeather from '@/types/IWeather';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

const CityPage: React.FC<{ cityWeatherResponse: IWeather }> = ({ cityWeatherResponse }) => {
  const isProvince = cityWeatherResponse.city.name.includes('Province');
  const cityName = cityWeatherResponse.city.name;

  return (
    <React.Fragment>
      <Head>
        <title>Weather App - {isProvince ? cityName.substring(0, 7) : cityName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <CityWeather cityWeatherResponse={cityWeatherResponse} />
    </React.Fragment>
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
