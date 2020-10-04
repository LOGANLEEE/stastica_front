import React, { useEffect } from 'react';
import SortIcon from '@material-ui/icons/Sort';
import { useSelector } from 'react-redux';

import { Essential } from 'app';
import {
	selectOrderInfo,
	SET_ORDER_INFO
} from 'Slices/List';
import { store } from 'store';
import { postHandler } from 'util/postProcessor';
import { Wrapper } from './Wrapper';



interface Props {}

/*
최신순 , 조회수
커뮤니티 별 노출 옵션

*/

export const ListOrder = ({}: Props & Essential) => {
	const { isDateDesc, isHitDesc, isDateOrder } = useSelector(selectOrderInfo);

	useEffect(() => {
		postHandler();
	}, [isDateDesc, isHitDesc, isDateOrder]);

	// ⬆ ⬇
	return (
		<Wrapper>
			<div className='main'>
				<SortIcon />
				<button
					className={`btn ${isDateOrder ? 'active' : 'inactive'}`}
					onClick={() => {
						store.dispatch(SET_ORDER_INFO({ isDateOrder: true, isDateDesc: !isDateDesc, isHitDesc }));
					}}>{`DATE${isDateDesc ? '⬆' : '⬇'} `}</button>
				<button
					className={`btn ${!isDateOrder ? 'active' : 'inactive'}`}
					onClick={() => {
						store.dispatch(SET_ORDER_INFO({ isDateOrder: false, isDateDesc, isHitDesc: !isHitDesc }));
					}}>{`HIT${isHitDesc ? '⬆' : '⬇'} `}</button>
			</div>
			
		</Wrapper>
	);
};
