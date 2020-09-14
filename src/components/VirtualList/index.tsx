import React, { useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, Checkbox, CircularProgress } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ko';

import { Post } from 'container/System/Slice';
import { Wrapper } from './Wrapper';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ViewOption } from 'container/Ui/Slice';
moment.locale('ko');

interface Props {
	posts: Array<Post>;
	isPostLoaded: boolean;
}

export const VirtualList = ({
	posts,
	isPostLoaded,
	viewAuthor,
	viewHitCount,
	viewDate,
	viewFrom,
}: Props & ViewOption) => {
	return (
		<Wrapper>
			<AutoSizer>
				{({ height, width }) =>
					isPostLoaded ? (
						<List
							className='virtualList'
							height={height}
							itemCount={posts.length}
							itemData={posts}
							itemSize={38}
							width={width}
							children={({ data, index, style, isScrolling }: ListChildComponentProps) =>
								Row({
									data,
									index,
									style,
									isScrolling,
									viewAuthor,
									viewHitCount,
									viewDate,
									viewFrom,
								})
							}
						/>
					) : (
						<CircularProgress className='progress' size={100} thickness={10} color='secondary' />
					)
				}
			</AutoSizer>
		</Wrapper>
	);
};

const Row = ({
	data,
	index,
	style,
	isScrolling,
	viewAuthor,
	viewDate,
	viewHitCount,
	viewFrom,
}: ListChildComponentProps & ViewOption) => {
	const { author, content, from, hit, link, title, upload_date }: Post = data[index];
	return (
		<div style={style} className={`Row ${from}`} onClick={() => window.open(link)}>
			{viewFrom ? (
				<div className='item0'>
					<div className='from'>{from}</div>
				</div>
			) : (
				<div className='item0' />
			)}

			<div className='item1'>
				<div className='title'>{title}</div>
			</div>

			{viewAuthor ? (
				<div className='item2'>
					<div className='author'>{author}</div>
				</div>
			) : (
				<div className='item2' />
			)}
			{viewHitCount ? (
				<div className='item3'>
					<div className='hit'>{hit}</div>
				</div>
			) : (
				<div className='item3' />
			)}
			{viewDate ? (
				<div className='item4'>
					<div className='upload_date'>{moment(upload_date).format('MM-DD hh:mm:ss')}</div>
				</div>
			) : (
				<div className='item4' />
			)}
		</div>
	);
};
