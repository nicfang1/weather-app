import axios from "axios";
import { DailyForcastedWeather } from "../interfaces/weather";
import { convertUTCDate, convertUTCTime } from "../utils/convert-utc";

export const getCurrentWeatherData = async (city: string | undefined) => {
	const response = await axios({
		method: "GET",
		url: "https://api.openweathermap.org/data/2.5/weather",
		headers: {
			"Content-Type": "application/json",
		},
		params: {
			q: city,
			units: "metric",
			appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
		},
		responseType: "json",
	});

	return response.request.response;
};

export const getWeatherForecast = async (city: string) => {
	const response = await axios({
		method: "GET",
		url: "https://api.openweathermap.org/data/2.5/forecast",
		headers: {
			"Content-Type": "application/json",
		},
		params: {
			q: city,
			units: "metric",
			appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
		},
		responseType: "json",
	});

	const list = await response.request.response.list;
	const transformedList = list.map((forcastedDate: DailyForcastedWeather) => {
		return {
			date: convertUTCDate(forcastedDate.dt_txt),
			time: convertUTCTime(forcastedDate.dt_txt),
			description: forcastedDate.weather[0].description,
			icon: forcastedDate.weather[0].icon,
			temp: forcastedDate.main.temp,
		};
	});
	console.log(transformedList);
	return transformedList;
};
