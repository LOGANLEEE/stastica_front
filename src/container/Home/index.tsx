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

	return (
		<Wrapper>
			<Grid container direction='row' justify='space-around' alignItems='stretch'>
				<Grid item>
					<Card isDark={isDark} />
				</Grid>
				<Grid item>
					<Card isDark={isDark} />
				</Grid>
				<Grid item>
					<Card isDark={isDark} />
				</Grid>
				<Grid item>
					<Card isDark={isDark} />
				</Grid>
			</Grid>
		</Wrapper>
	);
};

Home.propTypes = {};

Home.defaultProps = {};
