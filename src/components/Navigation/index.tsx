import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Grid, SvgIconTypeMap } from '@material-ui/core';
import { Home, Receipt, AccountBalance, Poll } from '@material-ui/icons';

import { pageSet, Menu, SET_CURRENT_PAGE } from 'container/Ui/Slice';

import { Essential } from 'app';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import reactVirtualizedAutoSizer from 'react-virtualized-auto-sizer';

import { Wrapper } from './Wrapper';

interface Props {
	menus: Menu[];
}

const startIconHandler = (startIcon: string): OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | JSX.Element => {
	switch (startIcon) {
		case 'Hone':
			return <Home />;
		case 'Receipt':
			return <Receipt />;
		case 'AccountBalance':
			return <AccountBalance />;
		case 'Poll':
			return <Poll />;
	}
	return <Home />;
};

export const Navigation = ({ menus }: Props & Essential) => {
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<Grid className='nav_group' container direction='row' justify='space-around' alignItems='stretch'>
				{menus.map(({ name, text, color, startIcon }: Menu, idx) => (
					<button
						type='button'
						className='btn'
						key={`comp > Navigation > ${name} > ${idx}`}
						onClick={() => {
							dispatch(SET_CURRENT_PAGE(name));
						}}>
						{startIconHandler(startIcon)}
						<span>{name}</span>
					</button>
				))}
			</Grid>
		</Wrapper>
	);
};

Navigation.propTypes = {
	menus: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			text: PropTypes.string,
			color: PropTypes.string,
			startIcon: PropTypes.node,
		}),
	),
};

Navigation.defaultProps = {
	menus: [{ text: '', name: '', color: '', startIcon: <Home /> }],
};
