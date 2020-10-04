import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { selectViewOption, ViewOption } from 'container/Ui/Slice';

import { selectPosts, selectIsPostLoaded, Post } from 'Slices/System';

import { ListOption } from 'components/ListOption';
import { VirtualList } from 'components/VirtualList';
import { PostOpener } from 'components/PostOpener';
import { ListOrder } from 'components/ListOrder';
import { ListFilter } from 'components/ListFilter';

import { Wrapper } from './Wrapper';
import { Essential } from 'app';

interface Props {}

export const Ranking = (props: Props & Essential) => {
	const posts: Post[] = useSelector(selectPosts);
	const isPostLoaded: boolean = useSelector(selectIsPostLoaded);
	const { viewAuthor, viewDate, viewHitCount, viewFrom }: ViewOption = useSelector(selectViewOption);
	const { isMobile } = props;

	return (
		<Wrapper>
			<Grid className='container' container direction='row' justify='space-around' alignItems='stretch'>
				{!isMobile && (
					<Grid container item className='left'>
						<Grid item className='item'>
							<PostOpener {...props} isPostLoaded={isPostLoaded} posts={posts} />
						</Grid>
					</Grid>
				)}

				<Grid item className='middle'>
					<VirtualList
						isPostLoaded={isPostLoaded}
						posts={posts}
						viewAuthor={viewAuthor}
						viewDate={viewDate}
						viewHitCount={viewHitCount}
						viewFrom={viewFrom}
						{...props}
					/>
				</Grid>

				{!isMobile && (
					<Grid container item className='right'>
						<Grid item className='item'>
							<ListOption {...props} />
							<ListOrder {...props} />
							<ListFilter {...props} /
							>
						</Grid>
					</Grid>
				)}
			</Grid>
		</Wrapper>
	);
};
