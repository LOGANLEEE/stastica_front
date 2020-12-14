import React from 'react';
import { useSelector } from 'react-redux';

import { Essential } from 'app';

import { selectCurrentSite, selectSiteList, Communitylist, SET_CURRENT_SITE } from 'Slices/List';

import { Wrapper } from './Wrapper';
import { store } from 'store';

interface Props {}

export const ListFilter = ({}: Props & Essential) => {
	const currentPost = useSelector(selectCurrentSite);
	const communityList: Communitylist = useSelector(selectSiteList);

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
								store.dispatch(SET_CURRENT_SITE(eng));
							}}>
							{kor}
						</button>
					);
				})}
			</div>
		</Wrapper>
	);
};
