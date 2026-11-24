import axios from "axios";

const WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json";

function getWeatherId(conditionCode, isDay) {
  if ([1087, 1273, 1276, 1282].includes(conditionCode)) return 200;
  if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(conditionCode)) return 500;
  if ([1066, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1249, 1252, 1255, 1258, 1261, 1264].includes(conditionCode)) return 600;
  if ([1030, 1135, 1147].includes(conditionCode)) return 741;
  if ([1000].includes(conditionCode)) return isDay ? 800 : 801;
  return 801;
}

function toIconUrl(icon) {
  if (!icon) return "";
  return icon.startsWith("//") ? `https:${icon}` : icon;
}

function createWeatherEntry({ dateTime, temp, feelsLike, min, max, humidity, cloud, condition, isDay }) {
  return {
    dt_txt: dateTime,
    main: {
      temp,
      feels_like: feelsLike,
      temp_min: min,
      temp_max: max,
      humidity,
    },
    clouds: { all: cloud },
    weather: [
      {
        id: getWeatherId(condition.code, isDay),
        main: condition.text,
        description: condition.text,
        icon: toIconUrl(condition.icon),
      },
    ],
  };
}

export async function fetchWeather(location, apiKey) {
  if (!apiKey) {
    throw new Error("Missing REACT_APP_WEATHER_API_KEY environment variable.");
  }

  const response = await axios.get(WEATHER_API_URL, {
    params: {
      key: apiKey,
      q: Array.isArray(location) ? `${location[0]},${location[1]}` : location,
      days: 3,
      aqi: "no",
      alerts: "yes",
    },
    timeout: 10000,
  });
  const { current, forecast, location: resolvedLocation } = response.data;

  const currentEntry = createWeatherEntry({
    dateTime: current.last_updated,
    temp: current.temp_c,
    feelsLike: current.feelslike_c,
    min: forecast.forecastday[0].day.mintemp_c,
    max: forecast.forecastday[0].day.maxtemp_c,
    humidity: current.humidity,
    cloud: current.cloud,
    condition: current.condition,
    isDay: current.is_day,
  });

  const forecastEntries = forecast.forecastday.map((day) =>
    createWeatherEntry({
      dateTime: `${day.date} 12:00`,
      temp: day.day.avgtemp_c,
      feelsLike: day.day.avgtemp_c,
      min: day.day.mintemp_c,
      max: day.day.maxtemp_c,
      humidity: day.day.avghumidity,
      cloud: day.day.avgvis_km ? Math.round(100 - day.day.avgvis_km * 4) : 0,
      condition: day.day.condition,
      isDay: 1,
    })
  );

  return {
    city: {
      name: resolvedLocation.name,
      country: resolvedLocation.country,
    },
    list: [currentEntry, ...forecastEntries],
  };
}
