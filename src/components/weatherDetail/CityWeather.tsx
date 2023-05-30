import IWeather from '@/types/IWeather';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AirIcon from '@mui/icons-material/Air';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Box, Divider, Grid, Slider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Video from './Video';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CityWeather: React.FC<{ cityWeatherResponse: IWeather }> = ({ cityWeatherResponse }) => {
  const [value, setValue] = useState<number | number[]>(0);
  const { asPath } = useRouter();

  useEffect(() => {
    setValue(0);
  }, [asPath]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const getDate = (time: number) => {
    var unixDate = new Date(time * 1000);
    var day = unixDate.getUTCDate();
    var month = unixDate.getUTCMonth();
    var year = unixDate.getUTCFullYear();

    return `${day} ${months[month]} ${year}`;
  };

  const marks = [
    {
      value: 0,
      label: getDate(cityWeatherResponse.list[0].dt)
    },
    {
      value: 39,
      label: getDate(cityWeatherResponse.list[39].dt)
    }
  ];

  const getTime = (time: number) => {
    var unixTime = new Date(time * 1000);
    var hours = unixTime.getUTCHours();
    var minutes = unixTime.getUTCMinutes();
    return `${hours > 10 ? hours : '0' + hours}.${minutes}0`;
  };

  const rawDescription: string = cityWeatherResponse.list[value as number].weather[0].description;
  const splitDesc = rawDescription.split(' ');
  for (var i = 0; i < splitDesc.length; i++) {
    splitDesc[i] = splitDesc[i].charAt(0).toUpperCase() + splitDesc[i].slice(1);
  }
  const description = splitDesc.join(' ');

  const cityName = cityWeatherResponse.city.name;
  const isProvince = cityWeatherResponse.city.name.includes('Province');

  return (
    <Box className="m-52">
      <Video rawDescription={rawDescription} />
      <Grid container className="flex flex-col flex-column">
        <Grid item className="flex flex-col justify-center items-center mb-4" xs={12}>
          <Typography variant="h2">
            {isProvince ? cityName.substring(0, 7) : cityName}, {cityWeatherResponse.city.country}
          </Typography>
          <Typography variant="h4">{`${getDate(
            cityWeatherResponse.list[value as number].dt
          )}`}</Typography>
          <Typography variant="h4">{`${getTime(
            cityWeatherResponse.list[value as number].dt
          )}`}</Typography>
        </Grid>
        <Grid container item className="flex flex-row justify-center items-center">
          <Grid item className="flex flex-col justify-center items-center">
            <img
              src={`https://openweathermap.org/img/wn/${
                cityWeatherResponse.list[value as number].weather[0].icon
              }@2x.png`}
              alt=""
              width={180}
            />
            <Typography>{cityWeatherResponse.list[value as number].weather[0].main}</Typography>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item className="flex flex-col justify-center ml-10">
            <Box className="flex  items-center">
              <ThermostatIcon className="mr-2" />
              <Typography variant="h5">
                Temp: {Math.round(cityWeatherResponse.list[value as number].main.temp)}°C
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <AccessibilityNewIcon className="mr-2" />
              <Typography variant="h5">
                Feels Like: {Math.round(cityWeatherResponse.list[value as number].main.feels_like)}
                °C
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <BloodtypeIcon className="mr-2" />
              <Typography variant="h5">
                {`Max/Min: ${Math.round(
                  cityWeatherResponse.list[value as number].main.temp_max
                )}/${Math.round(cityWeatherResponse.list[value as number].main.temp_min)}°C`}
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <OpacityIcon className="mr-2" />
              <Typography variant="h5">
                Humidity: %{Math.round(cityWeatherResponse.list[value as number].main.humidity)}
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <AirIcon className="mr-2" />
              <Typography variant="h5">
                Wind Speed: {Math.round(cityWeatherResponse.list[value as number].wind.speed)}m/s
              </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <CalendarMonthIcon className="mr-2" />
              <Typography variant="h5">{`${getDate(
                cityWeatherResponse.list[value as number].dt
              )}`}</Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Box className="flex  items-center">
              <AccessTimeIcon className="mr-2" />
              <Typography variant="h5">{`${getTime(
                cityWeatherResponse.list[value as number].dt
              )}`}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container item className="flex justify-center items-center" xs={12}>
          <Slider
            aria-label="Temperature"
            value={value ? value : 0}
            getAriaValueText={valuetext}
            valueLabelDisplay="off"
            onChange={handleChange}
            sx={{ my: 2 }}
            defaultValue={0}
            step={1}
            marks={marks}
            min={0}
            max={39}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityWeather;
