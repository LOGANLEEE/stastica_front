import React from 'react';
import { useSelector } from 'react-redux';

import { VirtualList } from 'components/VirtualList';

import { selectPosts } from 'container/System/Slice';

import { Wrapper } from './Wrapper';
import { ContainerProps } from 'app';

export const Ranking = ({ isDark, menus }: ContainerProps) => {
	const posts = useSelector(selectPosts);

	return (
		<Wrapper>
			<VirtualList list={posts} showAuthor={true} showHit={true} showUploadDate={true} />
		</Wrapper>
	);
};
