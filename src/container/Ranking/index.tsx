import { Grid } from '@material-ui/core';
import { Essential } from 'app';
import { ListFilter } from 'components/ListFilter';
import { ListOption } from 'components/ListOption';
import { ListOrder } from 'components/ListOrder';
import { PostOpener } from 'components/PostOpener';
import { VirtualList } from 'components/VirtualList';
import { selectViewOption, ViewOption } from 'container/Ui/Slice';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	selectIsPostLoaded,
	selectTotalPosts,
	selectCurrentSite,
	selsectSortOrder,
	selectCurrentPost,
} from 'Slices/List';
import { Posts } from 'Slices/List';
import { postHandler } from 'util/postProcessor';
import { Wrapper } from './Wrapper';

interface Props {}

export const Ranking = (props: Props & Essential) => {
	// TODO: check type of posts
	const posts: any = useSelector(selectCurrentPost);
	const isPostLoaded: boolean = useSelector(selectIsPostLoaded);
	const { isDateDesc, isHitDesc, isDateOrder } = useSelector(selsectSortOrder);

	const currentSite: string = useSelector(selectCurrentSite);

	useEffect(() => {
		if (isPostLoaded) {
			postHandler();
		}
	}, [isPostLoaded, isDateDesc, isHitDesc, isDateOrder, currentSite]);
	const { viewAuthor, viewDate, viewHitCount, viewFrom }: ViewOption = useSelector(selectViewOption);
	const { isMobile } = props;

	return (
		<Wrapper>
			<Grid className='container' container direction='row' justify='space-around' alignItems='stretch'>
				{!isMobile && (
					<Grid container item className='left'>
						{isPostLoaded && (
							<Grid item className='item'>
								<PostOpener {...props} isPostLoaded={isPostLoaded} posts={posts} />
							</Grid>
						)}
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
						{isPostLoaded && (
							<Grid item className='item'>
								<ListOption {...props} />
								<ListOrder {...props} />
								<ListFilter {...props} />
							</Grid>
						)}
					</Grid>
				)}
			</Grid>
		</Wrapper>
	);
};
