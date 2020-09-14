import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Essential } from 'app';

import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { Wrapper } from './Wrapper';

interface Props {
	THEME_HANDLER: Function;
}

export const ThemeSwitcher = ({ isDark, THEME_HANDLER }: Props & Essential) => {
	// const [isDark, setIsDark] = useState(true);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<IconButton
				// onClick={() => dispatch(THEME_HANDLER())}
				onClick={() => dispatch(THEME_HANDLER())}
				aria-label='dark'
				className={isDark ? 'dark' : 'white'}
				size='small'>
				{isDark ? <Brightness3Icon /> : <WbSunnyIcon />}
			</IconButton>
		</Wrapper>
	);
};

ThemeSwitcher.propTypes = {
	isDark: PropTypes.bool,
	THEME_HANDLER: PropTypes.func,
};

ThemeSwitcher.defaultProps = { isDark: true, THEME_HANDLER: () => {} };
