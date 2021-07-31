import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	celcius: true,
};

export const tempUnitSlice = createSlice({
	name: "temp/unit",
	initialState,
	reducers: {
		convertToCelcius: (state) => {
			state.celcius = !state.celcius;
		},
	},
});

export const { convertToCelcius } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;
