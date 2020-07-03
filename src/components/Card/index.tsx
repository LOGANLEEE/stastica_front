import React from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper } from './Wrapper';

interface Props {
	isDark: boolean;
	className?: string;
}

export const Card = ({ isDark, className }: Props) => (
	<Wrapper className={className}>
		<Grid container direction='column' justify='center' alignItems='center'>
			<p>title</p>
			<ul>
				<li>dummy dummy</li>
				<li>dummy dummy</li>
				<li>dummy dummy</li>
				<li>dummy dummy</li>
			</ul>
		</Grid>
	</Wrapper>
);
