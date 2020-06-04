import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import Navigation from 'components/Navigation';
import ThemeSwitcher from 'components/ThemeSwitcher';
import styled from 'styled-components';

// import { incrementAsync, selectHomeTest, MAIN_TEST } from './Slice';
import { selectUi, THEME_HANDLER } from 'container/Ui/Slice';

const Home = ({}) => {
	const Ui = useSelector(selectUi);
	const { isDark, menus } = Ui;
	// const dispatch = useDispatch();

	return (
		<Wrapper>
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='center'
			>
				<Grid
					className='header'
					container
					direction='row'
					justify='center'
					alignItems='center'
				>
					<Navigation menus={menus} />
					<ThemeSwitcher
						isDark={isDark}
						THEME_HANDLER={THEME_HANDLER}
					/>
				</Grid>
				<div className='body'>body</div>
				<div className='foot'>foot</div>
			</Grid>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
