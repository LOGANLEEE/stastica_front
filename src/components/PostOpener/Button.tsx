import React, { useState } from 'react';
import styled from 'styled-components';

import { Post } from 'Slices/List';

interface Props {
	start: number;
	posts: Post[];
}

export const Button = ({ start, posts }: Props) => {
	const [clicked, setClicked] = useState(false);
	return (
		<button
			className={`btn ${clicked}`}
			type='button'
			onClick={() => {
				setClicked(true);
				posts.forEach((e) => {
					window.open(e?.link);
				});
			}}>
			{start}
		</button>
	);
};

const Wrapper = styled.div``;
