import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, OverridableComponent, SvgIconTypeMap } from '@material-ui/core';
import icons from '@material-ui/icons';
import { Home, Receipt, AccountBalance, Poll } from '@material-ui/icons';

import { useHistory } from 'react-router';

import { Menu } from 'container/Ui/Slice';

import { Esential } from 'app';

const Wrapper = styled.div`
	text-align: center;
	.btn {
		margin: 0px 5px;
	}
`;

interface Props {
	menus: Menu[];
}

const startIconHandler = (startIcon: string): OverridableComponent<SvgIconTypeMap<{}, 'svg'>> => {
	let result: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> = <Home />;
	switch (startIcon) {
		case 'Hone':
			result = <Home />;
		case 'Receipt':
			result = <Receipt />;
		case 'AccountBalance':
			result = <AccountBalance />;
		case 'Poll':
			result = <Poll />;
	}
	return result;
};

// console.log(icons['Home']);

export const Navigation = ({ menus }: Props & Esential) => {
	const history = useHistory();
	return (
		<Wrapper>
			{menus.map(({ name, text, color, startIcon }: Menu, idx) => (
				<Button
					variant='contained'
					color={color}
					className='btn'
					startIcon={startIconHandler(startIcon)}
					// startIcon={icons[startIcon]}
					key={`comp > Navigation > ${name} > ${idx}`}
					onClick={() => history.push(text)}>
					{name}
				</Button>
			))}
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
