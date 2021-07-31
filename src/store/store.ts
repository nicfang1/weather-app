import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./currentWeatherSlice";
import forecastedWeatherReducer from "./forcastedWeatherSlice";
import tempUnitReducer from "./tempUnitSlice";

export const store = configureStore({
	reducer: {
		weather: weatherReducer,
		forecastedWeather: forecastedWeatherReducer,
		toCelcius: tempUnitReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
