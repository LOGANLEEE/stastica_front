import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { selectUi, THEME_HANDLER } from 'container/Ui/Slice';

import { Navigation } from 'components/Navigation';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Card } from 'components/Card';
import { Sign } from 'components/Sign';

import { Wrapper } from './Wrapper';

// import { incrementAsync, selectHomeTest, MAIN_TEST } from './Slice';

export const Home = () => {
	const Ui = useSelector(selectUi);
	const { isDark, menus } = Ui;
	// const dispatch = useDispatch();

	return (
		<Wrapper>
			<div className='head'>
				<Grid className='header' container direction='row' justify='space-around' alignItems='stretch'>
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
			</div>
			<div className='body'>
				<div>left</div>
				<Grid container direction='row' justify='space-around' alignItems='stretch'>
					<Grid xs={12} sm={6} item>
						<Card isDark={isDark} />
					</Grid>
					<Grid xs={12} sm={6} item>
						<Card isDark={isDark} />
					</Grid>
					<Grid xs={12} sm={6} item>
						<Card isDark={isDark} />
					</Grid>
					<Grid xs={12} sm={6} item>
						<Card isDark={isDark} />
					</Grid>
				</Grid>
				<div>Right</div>
			</div>
			<div className='foot'>foot</div>
		</Wrapper>
	);
};

Home.propTypes = {};

Home.defaultProps = {};
