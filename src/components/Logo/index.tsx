import React from 'react';
import { Wrapper } from './Wrapper';

import { Essential } from 'app';

interface Props {}

export const Logo = ({}: Props & Essential) => (
	<Wrapper>
		<span className='title'>Stastica</span>
	</Wrapper>
);
