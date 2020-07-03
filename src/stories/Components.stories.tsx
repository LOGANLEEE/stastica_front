import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Card } from 'components/Card';
import { Sign } from 'components/Sign';

import { Provider } from 'react-redux';
import { store } from 'store';

import {
	Home as HomeIcon,
	Receipt,
	AccountBalance,
	Poll,
} from '@material-ui/icons';

export default {
	title: 'Components',
	// component: Home,
	decorators: [
		withKnobs,
		(story: any) => <Provider store={store}> {story()} </Provider>,
	],
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

export const Card_ = () => {
	const [isDark, setIsDark] = useState(false);
	return <Card isDark={isDark} />;
};

export const Sign_ = () => {
	const [isDark, setIsDark] = useState(false);
	return <Sign isDark={isDark} />;
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
