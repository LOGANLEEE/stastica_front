import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
	text-align: center;

	.btn {
		margin: 0px 5px;
	}
`;

const Naviation = ({ menus }) => (
	<Wrapper>
		{menus.map(({ name, text, color, startIcon }) => (
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
