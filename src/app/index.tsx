import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { Home } from 'container/Home';
import { Ranking } from 'container/Ranking';
import { ExchangeRate } from 'container/ExchangeRate';
import { selectUi, THEME_HANDLER } from 'container/Ui/Slice';

import { Counter } from '../features/counter/Counter';

import { Card } from 'components/Card';
import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Sign } from 'components/Sign';

import { initializing } from 'api';
import { router } from 'router';

import { Wrapper } from './Wrapper';

const { exchangeRate, home: hone, ranking, bigData, news } = router;

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

export const App = () => {
	initializing();
	const Ui = useSelector(selectUi);
	const { isDark, menus } = Ui;

	return (
		<Router>
			<Switch>
				<Wrapper {...style}>
					<Grid className='head' container direction='row' justify='space-around' alignItems='stretch'>
						<Grid item>
							<ThemeSwitcher isDark={isDark} THEME_HANDLER={THEME_HANDLER} />
						</Grid>
						<Grid item>
							<Navigation menus={menus} />
						</Grid>

						<Grid item>
							<Sign isDark={isDark} />
						</Grid>
					</Grid>
					<Grid className='body' container direction='row' justify='space-around' alignItems='stretch'>
						<Grid item className='left'>
							left
						</Grid>

						<Grid item className='middle'>
							<Route exact path={hone}>
								<Home />
							</Route>
							<Route exact path={ranking}>
								<Ranking />
							</Route>
							<Route exact path={exchangeRate}>
								<ExchangeRate />
							</Route>
						</Grid>

						<Grid item className='right'>
							Right
						</Grid>
					</Grid>
					<div className='foot'>foot</div>
				</Wrapper>
			</Switch>
		</Router>
	);
};
