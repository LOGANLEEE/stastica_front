import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSet, ReceivePostSet } from 'Slices/System';
import { AppThunk, RootState, store } from 'store';

export const inti_post_from = 'all';

interface ListState {
	communitylist: Communitylist;
	communityPosts: PostSet[];
	initPost: PostSet;
	currentPost: string;
	orderInfo: OrderInfo;
}

const initialState: ListState = {
	communitylist: { eng: {}, kor: {}, siteArray: [{ eng: '', kor: '' }] },
	communityPosts: [],
	initPost: { date: { asc: [], desc: [] }, hit: { asc: [], desc: [] }, from: inti_post_from },
	currentPost: inti_post_from,
	orderInfo: { isDateDesc: false, isDateOrder: false, isHitDesc: true },
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		SET_COMMUNITY_LIST: (state: ListState, action: PayloadAction<Communitylist>) => {
			state.communitylist = action.payload;
		},
		SET_COMMUNITY_POSTS: (state: ListState, action: PayloadAction<PostSet[]>) => {
			state.communityPosts = action.payload;
		},
		SET_INIT_POST: (state: ListState, action: PayloadAction<PostSet>) => {
			state.initPost = action.payload;
		},
		SET_CURRENT_POST: (state: ListState, action: PayloadAction<string>) => {
			state.currentPost = action.payload;
		},
		SET_ORDER_INFO: (state: ListState, action: PayloadAction<OrderInfo>) => {
			state.orderInfo = action.payload;
		},
	},
});

export const {
	SET_COMMUNITY_LIST,
	SET_COMMUNITY_POSTS,
	SET_INIT_POST,
	SET_CURRENT_POST,
	SET_ORDER_INFO,
} = listSlice.actions;

export const selectCommunityList = (state: RootState) => state.list.communitylist;
export const selectCurrentPost = (state: RootState) => state.list.currentPost;
export const selectOrderInfo = (state: RootState) => state.list.orderInfo;

export default listSlice.reducer;

interface siteArray {
	kor: string;
	eng: string;
}

export interface Communitylist {
	eng: {};
	kor: {};
	siteArray: siteArray[];
}

export interface OrderInfo {
	isDateDesc: boolean;
	isHitDesc: boolean;
	isDateOrder: boolean;
}
