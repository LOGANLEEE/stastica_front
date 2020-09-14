import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { selectViewOption, ViewOption } from 'container/Ui/Slice';

import { selectPosts, selectIsPostLoaded, Post } from 'container/System/Slice';

import { ListOption } from 'components/ListOption';
import { VirtualList } from 'components/VirtualList';
import { PostOpener } from 'components/PostOpener';

import { Wrapper } from './Wrapper';
import { Essential } from 'app';

interface Props {}

export const Ranking = (props: Props & Essential) => {
	const posts: Post[] = useSelector(selectPosts);
	const isPostLoaded: boolean = useSelector(selectIsPostLoaded);
	const { viewAuthor, viewDate, viewHitCount, viewFrom }: ViewOption = useSelector(selectViewOption);

	return (
		<Wrapper>
			<Grid className='container' container direction='row' justify='space-around' alignItems='stretch'>
				<Grid container item className='left'>
					<Grid item className='item'>
						<PostOpener {...props} isPostLoaded={isPostLoaded} posts={posts} />
					</Grid>
				</Grid>

				<Grid item className='middle'>
					<VirtualList
						isPostLoaded={isPostLoaded}
						posts={posts}
						viewAuthor={viewAuthor}
						viewDate={viewDate}
						viewHitCount={viewHitCount}
						viewFrom={viewFrom}
					/>
				</Grid>

				<Grid container item className='right'>
					<Grid item className='item'>
						<ListOption {...props} />
					</Grid>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
