import { useEffect } from 'react';
import { AxiosClient } from '@/axios';

export default function Custom500() {
  useEffect(() => {
    const errorResponse = AxiosClient.get(`/api/city`).then((res) => res.data);
    console.log('Response500: ', errorResponse);
    // alert(cityWeatherResponse.message);
  }, []);

  return <h1>500 - Server-side error occurred</h1>;
}
