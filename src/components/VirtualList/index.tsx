import React, { useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, Checkbox, CircularProgress, useMediaQuery } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ko';

import { Post } from 'container/System/Slice';
import { Wrapper } from './Wrapper';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ViewOption } from 'container/Ui/Slice';
import { Essential } from 'app';
moment.locale('ko');

interface Props {
	posts: Array<Post>;
	isPostLoaded: boolean;
}

export interface WrapperTypes {
	width: {
		viewFromWidth: number;
		viewTitleWidth: number;
		viewAuthorWidth: number;
		viewHitCountWidth: number;
		viewDateWidth: number;
	};
}

export const VirtualList = ({
	posts,
	isPostLoaded,
	viewAuthor,
	viewHitCount,
	viewDate,
	viewFrom,
	isMobile,
	isDark,
}: Props & Essential & ViewOption) => {
	const width = {
		viewFromWidth: 5,
		viewTitleWidth: 65,
		viewAuthorWidth: 10,
		viewHitCountWidth: 10,
		viewDateWidth: 10,
	};

	let { viewFromWidth, viewTitleWidth, viewAuthorWidth, viewHitCountWidth, viewDateWidth } = width;

	if (!viewFrom) {
		viewTitleWidth = viewTitleWidth + viewFromWidth;
		viewFromWidth = 0;
	}
	if (!viewAuthor) {
		viewTitleWidth = viewTitleWidth + viewAuthorWidth;
		viewAuthorWidth = 0;
	}
	if (!viewHitCount) {
		viewTitleWidth = viewTitleWidth + viewHitCountWidth;
		viewHitCountWidth = 0;
	}
	if (!viewDate) {
		viewTitleWidth = viewTitleWidth + viewDateWidth;
		viewDateWidth = 0;
	}
	if (isMobile) {
	}

	const wrapperType: WrapperTypes = { width };
	return (
		<Wrapper {...wrapperType}>
			<AutoSizer>
				{({ height, width }) =>
					isPostLoaded ? (
						<List
							style={{ overflowX: 'hidden' }}
							className='virtualList'
							height={height}
							itemCount={posts.length}
							itemData={posts}
							itemSize={isMobile ? 80 : 40}
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
	const { author, content, from, fromKor, hit, link, title, upload_date }: Post = data[index];
	return (
		<div style={style} className={`Row ${from}`} onClick={() => window.open(link)}>
			{viewFrom ? (
				<div className='viewFrom'>
					<div className='from'>{fromKor}</div>
				</div>
			) : (
				<div className='item0' />
			)}
			<div className='viewTitle'>
				<div className='title'>{title}</div>
			</div>
			{viewAuthor ? (
				<div className='viewAuthor'>
					<div className='author'>{`✍🏻 ${author}`}</div>
				</div>
			) : (
				<div className='item2' />
			)}
			{viewHitCount ? (
				<div className='viewHitCount'>
					<div className='hit'>{`🔥 ${hit}`}</div>
				</div>
			) : (
				<div className='item3' />
			)}
			{viewDate ? (
				<div className='viewDate'>
					<div className='upload_date'>{`🏷 ${moment(upload_date).format('MM-DD hh:mm:ss')}`}</div>
				</div>
			) : (
				<div className='item4' />
			)}
		</div>
	);
};
