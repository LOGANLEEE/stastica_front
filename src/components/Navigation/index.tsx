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

interface NaviationProps {
	menus: Menu[];
}

const Naviation = ({ menus }: NaviationProps) => (
	<Wrapper>
		{menus.map(({ name, text, color, startIcon }: Menu) => (
			<Button
				variant='contained'
				color={color}
				className='btn'
				startIcon={startIcon}
				key={`comp > Navigation > ${name} > ${Math.random()}`}
				onClick={() => alert(`not yet but you clicked ${text}`)}
			>
				{text}
			</Button>
		))}
	</Wrapper>
);

Naviation.propTypes = {
	menus: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			text: PropTypes.string,
			color: PropTypes.string,
			startIcon: PropTypes.node,
		}),
	),
};

Naviation.defaultProps = {
	menus: [{ text: '', name: '', color: '', startIcon: null }],
};

export default Naviation;
