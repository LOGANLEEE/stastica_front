import React from 'react';
import { useSelector } from 'react-redux';

import { Essential } from 'app';

import { selectCurrentPost, selectCommunityList, Communitylist, SET_CURRENT_POST } from 'Slices/List';

import { Wrapper } from './Wrapper';
import { store } from 'store';

interface Props {}

export const ListFilter = ({}: Props & Essential) => {
	const currentPost = useSelector(selectCurrentPost);
	const communityList: Communitylist = useSelector(selectCommunityList);

	const { siteArray } = communityList;

	return (
		<Wrapper>
			<div className='list'>
				{siteArray.map(({ eng, kor }) => {
					return (
						<button
							className='btn'
							onClick={() => {
								store.dispatch(SET_CURRENT_POST(eng));
							}}>
							{kor}
						</button>
					);
				})}
			</div>
		</Wrapper>
	);
};
