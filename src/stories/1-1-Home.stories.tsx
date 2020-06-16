import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import Navigation from 'components/Navigation';
import ThemeSwitcher from 'components/ThemeSwitcher';

import { Provider } from 'react-redux';
import Home from 'container/Home';
import { store } from 'store';

import {
	Home as HomeIcon,
	Receipt,
	AccountBalance,
	Poll,
} from '@material-ui/icons';

export default {
	title: 'Home',
	// component: Home,
	decorators: [
		withKnobs,
		(story: any) => <Provider store={store}> {story()} </Provider>,
	],
};

export const Home_ = () => {
	return <Home />;
};

export const ThemeSwitcher_ = () => {
	const [isDark, setIsDark] = useState(false);
	return (
		<ThemeSwitcher
			isDark={isDark}
			THEME_HANDLER={() => {
				setIsDark(!isDark);
			}}
		/>
	);
};

export const Navigation_ = () => {
	return <Navigation menus={menus} />;
};

const menus = [
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
];
