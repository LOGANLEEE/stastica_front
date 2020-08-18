import React, { useState, useEffect } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Card } from 'components/Card';
import { Sign } from 'components/Sign';
import { VirtualList } from 'components/VirtualList';
import { GET_ALL_POSTS } from 'api/data';

import { Provider } from 'react-redux';
import { store } from 'store';

import { Home as HomeIcon, Receipt, AccountBalance, Poll } from '@material-ui/icons';

export default {
	title: 'Components',
	// component: Home,
	decorators: [withKnobs, (story: any) => <Provider store={store}> {story()} </Provider>],
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

export const VirtualList_ = () => {
	const [list, setList] = useState(vListDummyGenerator(20));
	const [showHit, setShowHit] = useState(false);
	const [showAuthor, setShowAuthor] = useState(false);
	const [showUploadDate, setShowUploadDate] = useState(false);

	useEffect(() => {
		GET_ALL_POSTS('/getAllPosts').then((e) => {
			setList(e);
		});
	}, []);

	return <VirtualList list={list} showHit={showHit} showAuthor={showAuthor} showUploadDate={showUploadDate} />;
};

const vListDummyGenerator = (count: number) => {
	const dum = {
		author: '우월군',
		content: null,
		create_dt: '2020-08-06T14:46:46.000Z',
		flag: 'Y',
		from: 'DogDrip',
		hit: '99',
		link: 'https://www.dogdrip.net/index.php?mid=dogdrip&sort_index=popular&page=1&document_srl=273514699',
		seq: 3944,
		title: '애들아 분노를 잠시 내려놓자',
		upload_date: '2020-08-06T14:06:45.000Z',
	};
	const holder = [];
	for (let i = 0; i <= count; i++) {
		holder.push(dum);
	}
	return holder;
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
