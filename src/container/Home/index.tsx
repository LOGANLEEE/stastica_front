import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Card } from 'components/Card';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';

export const Home = ({ isDark }: Essential) => {
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
