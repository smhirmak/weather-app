//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://openweathermap.org/forecast5
//https://api.openweathermap.org/data/2.5/forecast?q=malatya&appid=99626d429aee1f820f2ecf6e92a7d67f&lang=tr&units=metric
//https://openweathermap.org/weather-conditions   For icons
//https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=99626d429aee1f820f2ecf6e92a7d67f&lang=tr&units=metric

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { cityName } = query;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=99626d429aee1f820f2ecf6e92a7d67f&lang=en&units=metric`
      )
      .then((data) => {
        resolve('success');
        return res.status(200).json(data.data);
      })
      .catch((error) => {
        reject(error);
        return res.status(error.response.status).json(error.response.data);
      });
  });
}
