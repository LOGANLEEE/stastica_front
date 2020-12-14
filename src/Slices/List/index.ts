import { keys } from '@material-ui/core/styles/createBreakpoints';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const inti_post_from = 'all';

const initialState: ListState = {
	isPostLoaded: false,
	siteList: { eng: {}, kor: {}, siteArray: [{ eng: '', kor: '' }] },
	totalPosts: [],
	currentSite: 'all',
	currentPost: [],
	sortOrder: { isDateDesc: false, isDateOrder: false, isHitDesc: true },
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		SET_SITE_LIST: (state: ListState, action: PayloadAction<Communitylist>) => {
			state.siteList = action.payload;
		},
		SET_CURRENT_SITE: (state: ListState, action: PayloadAction<string>) => {
			state.currentSite = action.payload;
		},
		SET_SORT_ORDER: (state: ListState, action: PayloadAction<OrderInfo>) => {
			state.sortOrder = action.payload;
		},
		SET_TOTAL_POSTS: (state: ListState, action: PayloadAction<Posts[]>) => {
			state.totalPosts = action.payload;
		},
		SET_CURRENT_POSTS: (state: ListState, action: PayloadAction<Post[]>) => {
			state.currentPost = action.payload;
		},
		SET_IS_POST_LOADED: (state: ListState, action: PayloadAction<boolean>) => {
			state.isPostLoaded = action.payload;
		},
	},
});

export const {
	SET_SITE_LIST,
	SET_CURRENT_SITE,
	SET_SORT_ORDER,
	SET_TOTAL_POSTS,
	SET_CURRENT_POSTS,
	SET_IS_POST_LOADED,
} = listSlice.actions;

export const selectSiteList = (state: RootState) => state.list.siteList;
export const selectCurrentSite = (state: RootState) => state.list.currentSite;
export const selectTotalPosts = (state: RootState) => state.list.totalPosts;
export const selectCurrentPost = (state: RootState) => state.list.currentPost;
export const selsectSortOrder = (state: RootState) => state.list.sortOrder;
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

export interface Posts {
	from: string;
	date: { desc: Post[]; asc: Post[] };
	hit: { desc: Post[]; asc: Post[] };
}

export interface ReceivePostSet {
	posts: Posts[];
	status: boolean;
}

interface ListState {
	siteList: Communitylist;
	totalPosts: Posts[];
	currentPost: Post[];
	currentSite: string;
	sortOrder: OrderInfo;
	isPostLoaded: boolean;
}
