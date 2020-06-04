import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		mainTest: 0,
	},

	reducers: {
		MAIN_TEST: (state) => {
			state.mainTest += 1;
		},
	},
});

export const { MAIN_TEST } = homeSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(MAIN_TEST(amount));
	}, 1000);
};

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
