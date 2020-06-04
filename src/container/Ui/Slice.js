import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import {
	Home as HomeIcon,
	Receipt,
	AccountBalance,
	Poll,
} from '@material-ui/icons';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		isDark: false,
		menus: [
			{
				name: 'Main',
				text: 'Main',
				color: 'secondary',
				startIcon: <HomeIcon />,
			},
			{
				name: 'Ranking',
				text: 'Ranking',
				color: 'secondary',
				startIcon: <AccountBalance />,
			},
			{
				name: 'News',
				text: 'News',
				color: 'default',
				startIcon: <Receipt />,
			},
			{
				name: 'BigData',
				text: 'BigData',
				color: 'primary',
				startIcon: <Poll />,
			},
		],
	},

	reducers: {
		THEME_HANDLER: (state) => {
			state.isDark = !state.isDark;
		},
	},
});

export const { THEME_HANDLER } = uiSlice.actions;

// export const THEME_HANDLER = () => (dispatch) => {};

export const selectUi = (state) => state.ui;

export default uiSlice.reducer;
