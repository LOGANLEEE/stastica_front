import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { Home } from 'container/Home';
import { Ranking } from 'container/Ranking';
import { ExchangeRate } from 'container/ExchangeRate';
import { selectIsDark, selectMenus, THEME_HANDLER } from 'container/Ui/Slice';

import { Counter } from '../features/counter/Counter';

import { Card } from 'components/Card';
import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { ListOption } from 'components/ListOption';
import { Sign } from 'components/Sign';

import { initializing } from 'api';
import { router } from 'router';

import { Wrapper } from './Wrapper';

const { exchangeRate, home: hone, ranking, bigData, news } = router;

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

export interface Esential {
	isDark: boolean;
}

export const App = () => {
	useEffect(() => {
		initializing();
	}, []);

	const isDark = useSelector(selectIsDark);
	const menus = useSelector(selectMenus);

	const esential: Esential = {
		isDark,
	};

	return (
		<Router>
			<Switch>
				<Wrapper {...style}>
					<Grid className='head' container direction='row' justify='space-around' alignItems='stretch'>
						<Grid item>
							<ThemeSwitcher {...esential} THEME_HANDLER={THEME_HANDLER} />
						</Grid>
						<Grid item>
							<Navigation {...esential} menus={menus} />
						</Grid>

						<Grid item>
							<Sign {...esential} />
						</Grid>
					</Grid>
					<Grid className='body' container direction='row' justify='space-around' alignItems='stretch'>
						<Grid container item className='left'>
							left
						</Grid>

						<Grid item className='middle'>
							<Route exact path={hone}>
								<Home {...esential} />
							</Route>
							<Route exact path={ranking}>
								<Ranking {...esential} />
							</Route>
							<Route exact path={exchangeRate}>
								<ExchangeRate {...esential} />
							</Route>
						</Grid>

						<Grid container item className='right'>
							<Grid item>
								<ListOption {...esential} />
							</Grid>
						</Grid>
					</Grid>
					<div className='foot'>foot</div>
				</Wrapper>
			</Switch>
		</Router>
	);
};
