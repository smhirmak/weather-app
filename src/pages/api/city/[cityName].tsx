//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { cityName } = query;
  return new Promise(async (resolve, reject) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=99626d429aee1f820f2ecf6e92a7d67f&lang=tr&units=metric`
      )
      .then((data) => {
        resolve('success');
        return res.status(200).json(data.data);
      })
      .catch((error) => {
        reject(error);
        return res.status(500).json(error);
      });
  });
}
