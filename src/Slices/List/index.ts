import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const inti_post_from = 'all';

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

export interface PostSet {
	from?: string;
	date: {
		desc: Post[];
		asc: Post[];
	};
	hit: {
		desc: Post[];
		asc: Post[];
	};
}

export interface ReceivePostSet {
	community_posts: PostSet[];
	initPost: PostSet;
}

interface ListState {
	communitylist: Communitylist;
	communityPosts: PostSet[];
	initPost: PostSet;
	selectedCommunity: string;
	sortOrder: OrderInfo;
	posts: Post[];
	isPostLoaded: boolean;
}

const initialState: ListState = {
	isPostLoaded: false,
	posts: [],
	communitylist: { eng: {}, kor: {}, siteArray: [{ eng: '', kor: '' }] },
	communityPosts: [],
	initPost: { date: { asc: [], desc: [] }, hit: { asc: [], desc: [] }, from: inti_post_from },
	selectedCommunity: inti_post_from,
	sortOrder: { isDateDesc: false, isDateOrder: false, isHitDesc: true },
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
		SET_SELECTED_COMMUNITY: (state: ListState, action: PayloadAction<string>) => {
			state.selectedCommunity = action.payload;
		},
		SET_SORT_ORDER: (state: ListState, action: PayloadAction<OrderInfo>) => {
			state.sortOrder = action.payload;
		},
		SET_POSTS: (state: ListState, action: PayloadAction<Post[]>) => {
			state.posts = action.payload;
		},
		SET_POST_STATUS: (state: ListState, action: PayloadAction<boolean>) => {
			state.isPostLoaded = action.payload;
		},
	},
});

export const {
	SET_COMMUNITY_LIST,
	SET_COMMUNITY_POSTS,
	SET_INIT_POST,
	SET_SELECTED_COMMUNITY,
	SET_SORT_ORDER,
	SET_POSTS,
	SET_POST_STATUS,
} = listSlice.actions;

export const selectCommunityList = (state: RootState) => state.list.communitylist;
export const selectCurrentCommunity = (state: RootState) => state.list.selectedCommunity;
export const selectSortOrder = (state: RootState) => state.list.sortOrder;
export const selectPosts = (state: RootState) => state.list.posts;
export const selectIsPostLoaded = (state: RootState) => state.list.isPostLoaded;

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
