import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';

import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

import { Home as HomeIcon, Receipt, AccountBalance, Poll } from '@material-ui/icons';

import { router } from 'router';

const { bigData, exchangeRate, home, news, ranking } = router;

export interface Menu {
	name: string;
	text: string;
	color: string | any;
	startIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | any;
}

export interface uiSliceState {
	isDark: boolean;
	menus: Menu[];
}

interface EnumServiceGetOrderBy {
	[index: number]: { id: number; label: string; key: any };
}

const initialState: uiSliceState = {
	isDark: false,
	menus: [
		{
			name: 'Main',
			text: home,
			color: 'secondary',
			startIcon: <HomeIcon />,
		},
		{
			name: 'Ranking',
			text: ranking,
			color: 'secondary',
			startIcon: <AccountBalance />,
		},
		{
			name: 'News',
			text: news,
			color: 'default',
			startIcon: <Receipt />,
		},
		{
			name: 'BigData',
			text: bigData,
			color: 'primary',
			startIcon: <Poll />,
		},
	],
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		THEME_HANDLER: (state) => {
			state.isDark = !state.isDark;
		},
	},
});

export const { THEME_HANDLER } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui;

export default uiSlice.reducer;
