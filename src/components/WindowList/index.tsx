import React, { useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, Checkbox } from '@material-ui/core';
import moment from 'moment';

import { Wrapper } from './Wrapper';

interface Post {
	author: string;
	content: string;
	create_dt: string;
	flag: string;
	from: string;
	hit: string;
	link: string;
	seq: string;
	title: string;
	upload_date: string;
}

interface Props {
	list: Array<Post>;
	showHit: boolean;
	showUploadDate: boolean;
	showAuthor: boolean;
}

export const VirtualList = ({ list, showAuthor, showHit, showUploadDate }: Props) => {
	const style = {
		item1: {
			width: showAuthor || showHit || showUploadDate ? '50%;' : '95%;',
		},
	};
	const Row = ({ data, index, style, isScrolling }: ListChildComponentProps) => {
		const { author, content, from, hit, link, title, upload_date }: Post = data[index];
		return (
			<Grid className={`Row ${from}`} container direction='row' justify='space-between' alignItems='center'>
				<Grid item className='item1' onClick={() => window.open(link)}>
					{title}
				</Grid>
				{showAuthor ||
					(showHit && (
						<Grid
							item
							container
							direction='row'
							justify='space-between'
							alignItems='stretch'
							className='item2'
						>
							{showAuthor && (
								<Grid item className='author'>
									<span role='img' aria-label='author'>
										✏️
									</span>
									{author}
								</Grid>
							)}
							{showHit && (
								<Grid item className='hit'>
									<span role='img' aria-label='hit count'>
										🔥
									</span>
									{hit}
								</Grid>
							)}
						</Grid>
					))}
				{showUploadDate && (
					<Grid item className='item3'>
						<div>
							<span role='img' aria-label='upload date'>
								⏰
							</span>
							{/* {moment(upload_date).format('DD hh:mm:ss')} */}
							{moment(upload_date).startOf('minute').fromNow()}
						</div>
					</Grid>
				)}
			</Grid>
		);
	};

	return (
		<Wrapper style={style}>
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
