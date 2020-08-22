import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

export interface Post {
	author: string;
	content: string | null;
	create_dt: string;
	flag: string;
	from: string;
	hit: string;
	link: string;
	seq: string;
	title: string;
	upload_date: string;
}

interface SystemSliceState {
	isLoaded: boolean;
	apiList: any;
	posts: Array<Post>;
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
		SET_POSTS: (state: SystemSliceState, action: PayloadAction<Array<Post>>) => {
			state.posts = action.payload;
		},
	},
});

export const { SET_LOADING, SET_APILIST, SET_POSTS } = systemSlice.actions;

export const state = (state: RootState) => state.system;

export default systemSlice.reducer;
