import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

import { router } from 'router';

const { bigData, exchangeRate, home, news, ranking } = router;

export interface Menu {
	name: string;
	text: string;
	color: string | any;
	startIcon: string;
}

export interface ViewOption {
	viewAuthor: boolean;
	viewHitCount: boolean;
	viewDate: boolean;
}
export interface UiState {
	isDark: boolean;
	menus: Menu[];
	viewOption: ViewOption;
}

const initialState: UiState = {
	isDark: false,
	viewOption: {
		viewAuthor: true,
		viewDate: true,
		viewHitCount: true,
	},
	menus: [
		{
			name: 'Main',
			text: home,
			color: 'secondary',
			startIcon: 'Home',
		},
		{
			name: 'Ranking',
			text: ranking,
			color: 'secondary',
			startIcon: 'AccountBalance',
		},
		{
			name: 'News',
			text: news,
			color: 'default',
			startIcon: 'Receipt',
		},
		{
			name: 'BigData',
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
	},
});

export const { THEME_HANDLER, SET_VIEW_OPTION } = uiSlice.actions;

export const selectIsDark = (state: RootState) => state.ui.isDark;
export const selectMenus = (state: RootState) => state.ui.menus;
export const selectViewOption = (state: RootState) => state.ui.viewOption;

export default uiSlice.reducer;
