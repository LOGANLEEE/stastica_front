import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

interface homeSliceState {
	mainTest: number;
}

const initialState: homeSliceState = {
	mainTest: 0,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		MAIN_TEST: (state: homeSliceState) => {
			state.mainTest += 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.mainTest += action.payload;
		},
	},
});

export const { MAIN_TEST } = homeSlice.actions;

export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
	setTimeout(() => {
		dispatch(MAIN_TEST());
	}, 1000);
};

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
