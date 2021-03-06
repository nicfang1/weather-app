import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeatherData } from "../api/fetch-weather-data";
import { CurrentWeatherData } from "../interfaces/weather-interface";

const initialState: CurrentWeatherData = {
	weather: [{ description: "", main: "", id: 0, icon: "" }],
	main: {
		temp: 0,
		feels_like: 0,
		temp_max: 0,
		temp_min: 0,
		humidity: 0,
		pressure: 0,
	},
	name: "",
};

export const fetchWeatherData = createAsyncThunk(
	"weather/fetchCurrentWeather",
	async (city: string | undefined) => {
		const response = await getCurrentWeatherData(city);
		return response;
	}
);

export const weatherSlice = createSlice({
	name: "current weather",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
			state.weather = action.payload.weather;
			state.name = action.payload.name;
			state.main = action.payload.main;
		});
	},
});

export default weatherSlice.reducer;
