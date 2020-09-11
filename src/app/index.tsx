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
import { ListOption } from 'components/ListOption';
import { Sign } from 'components/Sign';
import { Logo } from 'components/Logo';

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
	body: { container_height: 80 },
	foot: { container_height: 10 },
};

const { bigData, exchangeRate, home, news, ranking } = pageSet;

export interface Esential {
	isDark: boolean;
}

export const App = () => {
	useEffect(() => {
		initializing();
	}, []);

	const isDark = useSelector(selectIsDark);
	const currentPage = useSelector(selectCurrentPage);
	const menus = useSelector(selectMenus);

	const esential: Esential = {
		isDark,
	};

	const pageSwitch = () => {
		switch (currentPage) {
			case home:
				return <Home {...esential} />;
			case ranking:
				return <Ranking {...esential} />;
			case exchangeRate:
				return <ExchangeRate {...esential} />;

			default:
				return null;
		}
	};

	return (
		<Wrapper {...style}>
			<Grid className='head' container direction='row' justify='space-around' alignItems='stretch'>
				<Grid item className='head_item_0'>
					<Logo {...esential} />
				</Grid>
				<Grid item className='head_item_1'>
					<Navigation {...esential} menus={menus} />
				</Grid>

				<Grid item className='head_item_2'>
					<Sign {...esential} />
				</Grid>
				<Grid item className='head_item_3'>
					<ThemeSwitcher {...esential} THEME_HANDLER={THEME_HANDLER} />
				</Grid>
			</Grid>
			<Grid className='body' container direction='row' justify='space-around' alignItems='stretch'>
				<Grid container item className='left'>
					left
				</Grid>

				<Grid item className='middle'>
					{pageSwitch()}
				</Grid>

				<Grid container item className='right'>
					{currentPage === ranking && (
						<Grid item className='item'>
							<ListOption {...esential} />
						</Grid>
					)}
				</Grid>
			</Grid>
			<div className='foot'>foot</div>
		</Wrapper>
	);
};
