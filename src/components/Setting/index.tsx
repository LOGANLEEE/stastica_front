import React from 'react';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';

import SettingsIcon from '@material-ui/icons/Settings';

interface Props {}

export const Setting = ({}: Props & Essential) => (
	<Wrapper>
		<SettingsIcon />
	</Wrapper>
);
