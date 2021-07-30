import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CityState {
	city: string | undefined;
}

const initialState: CityState = {
	city: "",
};

export const citySlice = createSlice({
	name: "city",
	initialState,
	reducers: {
		queryCity: (state, action: PayloadAction<string | undefined>) => {
			state.city = action.payload;
		},
	},
});

export const { queryCity } = citySlice.actions;

export default citySlice.reducer;
