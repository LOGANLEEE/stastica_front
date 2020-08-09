import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

interface SystemSliceState {
	isLoaded: boolean;
	apiList: Object;
	posts: Object;
}

const initialState: SystemSliceState = {
	isLoaded: false,
	apiList: {},
	posts: [],
};

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		SET_LOADING: (state: SystemSliceState, action: PayloadAction<boolean>) => {
			state.isLoaded = action.payload;
		},
		SET_APILIST: (state: SystemSliceState, action: PayloadAction<boolean>) => {
			state.apiList = action.payload;
		},
		SET_POSTS: (state: SystemSliceState, action: PayloadAction<boolean>) => {
			state.posts = action.payload;
		},
	},
});

export const { SET_LOADING, SET_APILIST ,SET_POSTS} = systemSlice.actions;

export default systemSlice.reducer;
