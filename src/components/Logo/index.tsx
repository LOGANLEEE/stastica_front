import React from 'react';
import { Wrapper } from './Wrapper';

import { Essential } from 'app';

interface Props {}

export const Logo = ({}: Props & Essential) => (
	<Wrapper>
		<span
			className='title'
			onClick={() => {
				const url = window.location.href;
				window.location.href = url;
			}}>
			Stastica
		</span>
	</Wrapper>
);
