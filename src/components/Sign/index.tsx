import React from 'react';
import { Fingerprint } from '@material-ui/icons';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';

interface Props {}

export const Sign = ({ isDark }: Props & Essential) => (
	<Wrapper>
		<Fingerprint />
	</Wrapper>
);
