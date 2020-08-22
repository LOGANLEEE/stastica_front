import React, { useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, Checkbox } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ko';

import { Post } from 'container/System/Slice';
import { Wrapper } from './Wrapper';
moment.locale('ko');

interface Props {
	list: Array<Post>;
	showHit: boolean;
	showUploadDate: boolean;
	showAuthor: boolean;
}

export const VirtualList = ({ list, showAuthor, showHit, showUploadDate }: Props) => {
	const style = {
		item1: {
			width: showAuthor || showHit || showUploadDate ? '60vw;' : '95vw;',
		},
	};
	const Row = ({ data, index, style, isScrolling }: ListChildComponentProps) => {
		const { author, content, from, hit, link, title, upload_date }: Post = data[index];
		return (
			<Grid
				className={`Row ${from}`}
				container
				direction='row'
				justify='space-between'
				alignItems='center'
				onClick={() => window.open(link)}>
				<Grid item className='item1'>
					<div className='title'>{title}</div>
				</Grid>

				<Grid item className='item2'>
					<div className='author'>{author}</div>
				</Grid>

				<Grid item className='item3'>
					<div className='hit'>{hit}</div>
				</Grid>

				<Grid item className='item4'>
					<div className='upload_date'>{moment(upload_date).format('hh:mm:ss')}</div>
				</Grid>
			</Grid>
		);
	};

	return (
		<Wrapper>
			<AutoSizer>
				{({ height, width }) => (
					<List
						height={height}
						itemCount={list.length}
						itemData={list}
						itemSize={10}
						width={width}
						children={Row}
					/>
				)}
			</AutoSizer>
		</Wrapper>
	);
};
