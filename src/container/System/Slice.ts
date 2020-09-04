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
	isPostLoaded: boolean;
	address: any;
	posts: Array<Post>;
	isAddreadLoaded: boolean;
}

const initialState: SystemSliceState = {
	isPostLoaded: false,
	isAddreadLoaded: false,
	address: {},
	posts: [],
};

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		SET_POST_STATUS: (state: SystemSliceState, action: PayloadAction<boolean>) => {
			state.isPostLoaded = action.payload;
		},

		SET_ADDRESS_STATUS: (state: SystemSliceState, action: PayloadAction<boolean>) => {
			state.isAddreadLoaded = action.payload;
		},
		SET_ADDRESS: (state: SystemSliceState, action: PayloadAction<Object>) => {
			state.address = action.payload;
		},
		SET_POSTS: (state: SystemSliceState, action: PayloadAction<Array<Post>>) => {
			state.posts = action.payload;
		},
	},
});

export const { SET_ADDRESS_STATUS, SET_POST_STATUS, SET_ADDRESS, SET_POSTS } = systemSlice.actions;

export const selectPosts = (state: RootState) => state.system.posts;
export const selectIsPostLoaded = (state: RootState) => state.system.isPostLoaded;
export const selectAddress = (state: RootState) => state.system.address;

export default systemSlice.reducer;
