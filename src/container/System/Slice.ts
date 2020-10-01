import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

export interface Post {
	author: string;
	content: string | null;
	create_dt: string;
	flag: string;
	from: string;
	fromKor: string;
	hit: string;
	link: string;
	seq: string;
	title: string;
	upload_date: string;
}

interface SystemState {
	address: any;
	isAddreadLoaded: boolean;
	posts: Array<Post>;
	isPostLoaded: boolean;
}

const initialState: SystemState = {
	isPostLoaded: false,
	isAddreadLoaded: false,
	address: {},
	posts: [],
};

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		SET_POST_STATUS: (state: SystemState, action: PayloadAction<boolean>) => {
			state.isPostLoaded = action.payload;
		},

		SET_ADDRESS_STATUS: (state: SystemState, action: PayloadAction<boolean>) => {
			state.isAddreadLoaded = action.payload;
		},
		SET_ADDRESS: (state: SystemState, action: PayloadAction<object>) => {
			state.address = action.payload;
		},
		SET_POSTS: (state: SystemState, action: PayloadAction<Array<Post>>) => {
			state.posts = action.payload;
		},
	},
});

export const { SET_ADDRESS_STATUS, SET_POST_STATUS, SET_ADDRESS, SET_POSTS } = systemSlice.actions;

export const selectPosts = (state: RootState) => state.system.posts;
export const selectIsPostLoaded = (state: RootState) => state.system.isPostLoaded;
export const selectAddress = (state: RootState) => state.system.address;

export default systemSlice.reducer;
