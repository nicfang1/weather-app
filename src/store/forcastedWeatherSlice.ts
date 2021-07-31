import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherForecast } from "../api/fetch-weather-data";
import { TransformedForcastedData } from "../interfaces/weather-interface";

const initialState: TransformedForcastedData[] = [];

export const fetchForcastedData = createAsyncThunk(
	"weather/forcastedData",
	async (city: string | undefined) => {
		const response = await getWeatherForecast(city);
		return response;
	}
);

export const forcastedWeatherSlice = createSlice({
	name: "forcasted weather",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchForcastedData.fulfilled, (state, action) => {
			state.push(...action.payload);
		});
	},
});

export default forcastedWeatherSlice.reducer;
