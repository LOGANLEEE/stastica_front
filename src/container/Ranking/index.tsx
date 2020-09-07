import React from 'react';
import { useSelector } from 'react-redux';

import { VirtualList } from 'components/VirtualList';

import { selectPosts } from 'container/System/Slice';

import { Wrapper } from './Wrapper';
import { Esential } from 'app';

export const Ranking = ({ isDark }: Esential) => {
	const posts = useSelector(selectPosts);

	return (
		<Wrapper>
			<VirtualList list={posts} showAuthor={true} showHit={true} showUploadDate={true} />
		</Wrapper>
	);
};
