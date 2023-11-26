import fetch from 'node-fetch';

type Options = {
   latitude: number;
  longitude: number ;
};

type ApiResponseJSON = {
  results: {
    sunrise: string;
    sunset: string;
    solar_noon: string;
    day_length: string;
    civil_twighlight_begin: string;
    civil_twighlight_end: string;
    nautical_twighlight_begin: string;
    nautical_twighlight_end: string;
    astronomical_twighlight_begin: string;
    astronomical_twighlight_end: string;
  };
  status: string;
};

type Response = {
  sunrise: string;
  sunset: string;
};

async function getSunriseAndSunset(options: Options): Promise<Response> {
  const { latitude, longitude } = options;

  const apiResult = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&long=${longitude}`
  );
  const json: ApiResponseJSON = await apiResult.json();

  return {
    sunrise: json.results.sunrise,
    sunset: json.results.sunset,
  };
}

export default getSunriseAndSunset;
