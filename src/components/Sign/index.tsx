import React from 'react';
import { Fingerprint } from '@material-ui/icons';

import { Esential } from 'app';

import { Wrapper } from './Wrapper';

interface Props {}

export const Sign = ({ isDark }: Props & Esential) => (
	<Wrapper>
		<Fingerprint />
	</Wrapper>
);
