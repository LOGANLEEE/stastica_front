import React, { useState, useRef } from 'react';
import { List } from 'react-virtualized';

import { Wrapper } from './Wrapper';

interface Props {
	data: Array<Object>;
}

export const VirtualizedList = ({ data }: Props) => {
	const rowRenderer = ({
		key, // Unique key within array of rows
		index, // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible, // This row is visible within the List (eg it is not an overscanned row)
		style, // Style object to be applied to row (to position it)
	}) => {
		return (
			<div key={key} style={style}>
				{data[index].toString()}
			</div>
		);
	};
	return (
		<Wrapper>
			<List width={300} height={300} rowCount={data.length} rowHeight={20} rowRenderer={rowRenderer} />
		</Wrapper>
	);
};
