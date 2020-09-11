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
	list: Array<Post>;
	viewAuthor: boolean;
	viewHitCount: boolean;
	viewDate: boolean;
	isPostLoaded: boolean;
}

export const VirtualList = ({ list, viewAuthor, viewHitCount, viewDate, isPostLoaded }: Props) => {
	return (
		<Wrapper>
			<AutoSizer>
				{({ height, width }) =>
					isPostLoaded ? (
						<List
							className='virtualList'
							height={height}
							itemCount={200}
							itemData={list}
							itemSize={10}
							width={width}
							children={({ data, index, style, isScrolling }: ListChildComponentProps) =>
								Row({ data, index, style, isScrolling, viewAuthor, viewHitCount, viewDate })
							}
						/>
					) : (
						<CircularProgress color='secondary' />
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
}: ListChildComponentProps & ViewOption) => {
	const { author, content, from, hit, link, title, upload_date }: Post = data[index];
	return (
		<Grid
			className={`Row ${from}`}
			container
			direction='row'
			justify='space-between'
			alignItems='center'
			onClick={() => window.open(link)}>
			<Grid item className='item1' xs='auto'>
				<div className='title'>{title}</div>
			</Grid>

			{viewAuthor && (
				<Grid item className='item2' xs='auto'>
					<div className='author'>{author}</div>
				</Grid>
			)}
			{viewHitCount && (
				<Grid item className='item3' xs='auto'>
					<div className='hit'>{hit}</div>
				</Grid>
			)}
			{viewDate && (
				<Grid item className='item4' xs='auto'>
					<div className='upload_date'>{moment(upload_date).format('hh:mm:ss')}</div>
				</Grid>
			)}
		</Grid>
	);
};
