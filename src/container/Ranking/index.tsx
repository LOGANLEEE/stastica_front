import React from 'react';
import { useSelector } from 'react-redux';

import { VirtualList } from 'components/VirtualList';

import { selectPosts } from 'container/System/Slice';
import { selectViewOption } from 'container/Ui/Slice';

import { Wrapper } from './Wrapper';
import { Esential } from 'app';

export const Ranking = ({ isDark }: Esential) => {
	const posts = useSelector(selectPosts);
	const { viewAuthor, viewDate, viewHitCount } = useSelector(selectViewOption);

	return (
		<Wrapper>
			<VirtualList list={posts} viewAuthor={viewAuthor} viewDate={viewDate} viewHitCount={viewHitCount} />
		</Wrapper>
	);
};
