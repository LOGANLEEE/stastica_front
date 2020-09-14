import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

export interface Menu {
	name: string;
	text: string;
	color: string | any;
	startIcon: string;
}

export const pageSet = {
	home: 'HOME',
	ranking: 'RANKING',
	exchangeRate: 'EXCHANGERATE',
	bigData: 'BIGDATA',
	news: 'NEWS',
};

const { bigData, exchangeRate, home, news, ranking } = pageSet;

export interface ViewOption {
	viewAuthor: boolean;
	viewHitCount: boolean;
	viewDate: boolean;
	viewFrom: boolean;
}
export interface UiState {
	isDark: boolean;
	menus: Menu[];
	currentPage: string;
	viewOption: ViewOption;
}

const initialState: UiState = {
	isDark: false,
	viewOption: {
		viewAuthor: true,
		viewDate: true,
		viewHitCount: true,
		viewFrom: true,
	},
	currentPage: ranking,
	menus: [
		{
			name: home,
			text: home,
			color: 'secondary',
			startIcon: 'Home',
		},
		{
			name: ranking,
			text: ranking,
			color: 'secondary',
			startIcon: 'AccountBalance',
		},
		{
			name: news,
			text: news,
			color: 'default',
			startIcon: 'Receipt',
		},
		{
			name: bigData,
			text: bigData,
			color: 'primary',
			startIcon: 'Poll',
		},
	],
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		THEME_HANDLER: (state: UiState) => {
			state.isDark = !state.isDark;
		},
		SET_VIEW_OPTION: (state: UiState, action: PayloadAction<ViewOption>) => {
			state.viewOption = action.payload;
		},
		SET_CURRENT_PAGE: (state: UiState, action: PayloadAction<string>) => {
			state.currentPage = action.payload;
		},
	},
});

export const { THEME_HANDLER, SET_VIEW_OPTION, SET_CURRENT_PAGE } = uiSlice.actions;

export const selectIsDark = (state: RootState) => state.ui.isDark;
export const selectMenus = (state: RootState) => state.ui.menus;
export const selectViewOption = (state: RootState) => state.ui.viewOption;
export const selectCurrentPage = (state: RootState) => state.ui.currentPage;

export default uiSlice.reducer;
