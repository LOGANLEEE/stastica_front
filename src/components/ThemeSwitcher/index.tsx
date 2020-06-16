import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

interface ThemeSwitcherProps {
	isDark: boolean;
	THEME_HANDLER: Function;
}

const ThemeSwitcher = ({ isDark, THEME_HANDLER }: ThemeSwitcherProps) => {
	// const [isDark, setIsDark] = useState(true);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<IconButton
				// onClick={() => dispatch(THEME_HANDLER())}
				onClick={() => dispatch(THEME_HANDLER())}
				aria-label='dark'
				className={isDark ? 'dark' : 'white'}
				size='small'
			>
				{isDark ? <Brightness3Icon /> : <WbSunnyIcon />}
			</IconButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.white {
		color: black;
		background-color: white;
	}

	.dark {
		color: yellow;
		background-color: black;
	}
`;

ThemeSwitcher.propTypes = {
	isDark: PropTypes.bool,
	THEME_HANDLER: PropTypes.func,
};

ThemeSwitcher.defaultProps = { isDark: true, THEME_HANDLER: () => {} };

export default ThemeSwitcher;
