import React from 'react';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';
import { Post } from 'container/System/Slice';

interface Props {
	posts: Post[];
	isPostLoaded: boolean;
}

const openrRenderer = (count: number, posts: Post[]) => {
	const holder = [];
	for (let i = 10; i <= 10 * count; i += 10) {
		holder.push(
			<button
				type='button'
				className='btn'
				key={`PostOpener > ${i}`}
				onClick={() => {
					for (let j = i - 9; j < i; j++) {
						window.open(posts[j]?.link);
					}
				}}>
				{i}
			</button>,
		);
	}
	return holder;
};

export const PostOpener = ({ isDark, isPostLoaded, posts }: Props & Essential) => {
	return <Wrapper>{isPostLoaded && openrRenderer(20, posts)}</Wrapper>;
};
