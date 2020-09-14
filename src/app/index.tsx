import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { Home } from 'container/Home';
import { Ranking } from 'container/Ranking';
import { ExchangeRate } from 'container/ExchangeRate';
import { selectIsDark, selectMenus, THEME_HANDLER, selectCurrentPage, pageSet } from 'container/Ui/Slice';

import { Counter } from '../features/counter/Counter';

import { Card } from 'components/Card';
import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Sign } from 'components/Sign';
import { Logo } from 'components/Logo';
import { CopyRight } from 'components/CopyRight';

import { initializing } from 'api';

import { Wrapper } from './Wrapper';

// Maybe passing props to styled-component logic wont be needed anymore.
export interface Style {
	head: { container_height: number };
	body: { container_height: number };
	foot: { container_height: number };
}

const style: Style = {
	head: { container_height: 10 },
	body: { container_height: 85 },
	foot: { container_height: 5 },
};

const { bigData, exchangeRate, home, news, ranking } = pageSet;

export interface Essential {
	isDark: boolean;
}

export const App = () => {
	useEffect(() => {
		initializing();
	}, []);

	const isDark = useSelector(selectIsDark);
	const currentPage = useSelector(selectCurrentPage);
	const menus = useSelector(selectMenus);

	const essential: Essential = {
		isDark,
	};

	return (
		<Wrapper {...style}>
			<Grid className='head' container direction='row' justify='space-around' alignItems='stretch'>
				<Grid item className='head_item_0 item'>
					<Logo {...essential} />
				</Grid>
				<Grid item className='head_item_1 item'>
					<Navigation {...essential} menus={menus} />
				</Grid>
				<Grid item className='brick' />

				<Grid item className='head_item_2 item'>
					<Sign {...essential} />
				</Grid>
				<Grid item className='head_item_3 item'>
					<ThemeSwitcher {...essential} THEME_HANDLER={THEME_HANDLER} />
				</Grid>
				<Grid item className='brick2' />
			</Grid>
			<Grid item className='body'>
				{currentPage === home && <Home {...essential} />}
				{currentPage === ranking && <Ranking {...essential} />}
				{currentPage === exchangeRate && <ExchangeRate {...essential} />}
			</Grid>
			<Grid className='foot' container direction='row' justify='space-around' alignItems='stretch'>
				<CopyRight {...essential} />
			</Grid>
		</Wrapper>
	);
};
