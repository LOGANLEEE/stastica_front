import { store } from 'store';
import { inti_post_from, SET_POSTS } from 'Slices/List';
import { Action, AnyAction } from '@reduxjs/toolkit';

const dispatch = (event: AnyAction) => store.dispatch(event);

export const postHandler = () => {
	const {
		initPost: { date, hit, from },
		communityPosts,
		sortOrder: { isDateDesc, isDateOrder, isHitDesc },
		selectedCommunity,
	} = store.getState().list;

	if (selectedCommunity === inti_post_from) {
		if (isDateOrder) {
			dispatch(SET_POSTS(isDateDesc ? date.desc : date.asc));
		} else {
			dispatch(SET_POSTS(isHitDesc ? hit.desc : hit.asc));
		}
	}
};
