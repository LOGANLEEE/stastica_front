import React, { useEffect } from 'react';
import SortIcon from '@material-ui/icons/Sort';
import { useSelector } from 'react-redux';

import { Essential } from 'app';
import { selsectSortOrder, SET_SORT_ORDER } from 'Slices/List';
import { store } from 'store';
import { postHandler } from 'util/postProcessor';
import { Wrapper } from './Wrapper';

interface Props {}

/*
최신순 , 조회수
커뮤니티 별 노출 옵션

*/

export const ListOrder = ({}: Props & Essential) => {
	const { isDateDesc, isHitDesc, isDateOrder } = useSelector(selsectSortOrder);

	// ⬆ ⬇
	return (
		<Wrapper>
			<div className='main'>
				<SortIcon />
				<button
					className={`btn ${isDateOrder ? 'active' : 'inactive'}`}
					onClick={() => {
						store.dispatch(SET_SORT_ORDER({ isDateOrder: true, isDateDesc: !isDateDesc, isHitDesc }));
					}}>{`DATE${isDateDesc ? '⬆' : '⬇'} `}</button>
				<button
					className={`btn ${!isDateOrder ? 'active' : 'inactive'}`}
					onClick={() => {
						store.dispatch(SET_SORT_ORDER({ isDateOrder: false, isDateDesc, isHitDesc: !isHitDesc }));
					}}>{`HIT${isHitDesc ? '⬆' : '⬇'} `}</button>
			</div>
		</Wrapper>
	);
};
