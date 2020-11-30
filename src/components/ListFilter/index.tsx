import React from 'react';
import { useSelector } from 'react-redux';

import { Essential } from 'app';

import { selectCurrentCommunity, selectCommunityList, Communitylist, SET_SELECTED_COMMUNITY } from 'Slices/List';

import { Wrapper } from './Wrapper';
import { store } from 'store';

interface Props {}

export const ListFilter = ({}: Props & Essential) => {
	const currentPost = useSelector(selectCurrentCommunity);
	const communityList: Communitylist = useSelector(selectCommunityList);

	const { siteArray } = communityList;

	return (
		<Wrapper>
			<div className='list'>
				{siteArray.map(({ eng, kor }, idx) => {
					return (
						<button
							key={idx + eng + kor}
							className='btn'
							onClick={() => {
								store.dispatch(SET_SELECTED_COMMUNITY(eng));
							}}>
							{kor}
						</button>
					);
				})}
			</div>
		</Wrapper>
	);
};
