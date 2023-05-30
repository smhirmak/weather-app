export default interface IWeather {
  weather: {
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
  };
  name: string;
  dt: number;
  list: any[];
  city: {
    name: string;
    country: string;
  };
}
