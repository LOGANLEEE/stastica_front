import React, { useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, Checkbox, CircularProgress, useMediaQuery } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ko';

import { Post } from 'Slices/List';
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
		fromWidth: number;
		titleWidth: number;
		authorWidth: number;
		hitCountWidth: number;
		dateWidth: number;
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
	const normalWidth = {
		fromWidth: 5,
		titleWidth: 65,
		authorWidth: 10,
		hitCountWidth: 10,
		dateWidth: 10,
	};
	const mobileWidth = {
		fromWidth: 5,
		titleWidth: 95,
		authorWidth: 30,
		hitCountWidth: 30,
		dateWidth: 30,
	};

	let {
		fromWidth: normalFromWidth,
		titleWidth: normalTitleWidth,
		authorWidth: normalAuthorWidth,
		hitCountWidth: normalHitCountWidth,
		dateWidth: normalDateWidth,
	} = normalWidth;
	let {
		fromWidth: mobileFromWidth,
		titleWidth: mobileTitleWidth,
		authorWidth: mobileAuthorWidth,
		hitCountWidth: mobileHitCountWidth,
		dateWidth: mobileDateWidth,
	} = mobileWidth;

	if (!viewFrom) {
		normalTitleWidth = normalTitleWidth + normalFromWidth;
		normalFromWidth = 0;
		mobileTitleWidth = mobileTitleWidth + mobileFromWidth;
		mobileFromWidth = 0;
	}
	if (!viewAuthor) {
		normalTitleWidth = normalTitleWidth + normalAuthorWidth;
		normalAuthorWidth = 0;
		mobileTitleWidth = mobileTitleWidth + mobileAuthorWidth;
		mobileAuthorWidth = 0;
	}
	if (!viewHitCount) {
		normalTitleWidth = normalTitleWidth + normalHitCountWidth;
		normalHitCountWidth = 0;
		mobileTitleWidth = mobileTitleWidth + mobileHitCountWidth;
		mobileHitCountWidth = 0;
	}
	if (!viewDate) {
		normalTitleWidth = normalTitleWidth + normalDateWidth;
		normalDateWidth = 0;
		mobileTitleWidth = mobileTitleWidth + mobileDateWidth;
		mobileDateWidth = 0;
	}

	const wrapperType: WrapperTypes = { width: isMobile ? mobileWidth : normalWidth };
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
									isMobile,
									isDark,
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
	isDark,
	isMobile,
}: ListChildComponentProps & ViewOption & Essential) => {
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
					<div className='upload_date'>{`🏷 ${moment(upload_date).format('MM-DD HH:mm:ss')}`}</div>
				</div>
			) : (
				<div className='item4' />
			)}
		</div>
	);
};
