import axios from "axios";

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

export const getWeatherForecast = (city: string) => {
	axios({
		method: "GET",
		url: "api.openweathermap.org/data/2.5/forecast?",
		headers: {
			"Content-Type": "application/json",
		},
		params: {
			q: city,
			units: "metric",
			appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
		},
		responseType: "json",
	}).then((response) => {
		return response.request.responese;
	});
};
