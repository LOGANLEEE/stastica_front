import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { Menu } from 'container/Ui/Slice';

const Wrapper = styled.div`
	text-align: center;
	.btn {
		margin: 0px 5px;
	}
`;

interface Props {
	menus: Menu[];
}

export const Navigation = ({ menus }: Props) => (
	<Wrapper>
		{menus.map(({ name, text, color, startIcon }: Menu) => (
			<Button
				variant='contained'
				color={color}
				className='btn'
				startIcon={startIcon}
				key={`comp > Navigation > ${name} > ${Math.random()}`}
				onClick={() => alert(`${text}`)}>
				{text}
			</Button>
		))}
	</Wrapper>
);

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
	menus: [{ text: '', name: '', color: '', startIcon: null }],
};
