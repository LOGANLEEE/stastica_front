import { store } from 'store';
import { inti_post_from } from 'Slices/List';
import { SET_POSTS } from 'Slices/System';
import { Action, AnyAction } from '@reduxjs/toolkit';

const dispatch = (event: AnyAction) => store.dispatch(event);

export const postHandler = () => {
	const {
		initPost: { date, hit, from },
		communityPosts,
		orderInfo: { isDateDesc, isDateOrder, isHitDesc },
		currentPost,
	} = store.getState().list;

	if (currentPost === inti_post_from) {
		if (isDateOrder) {
			dispatch(SET_POSTS(isDateDesc ? date.desc : date.asc));
		} else {
			dispatch(SET_POSTS(isHitDesc ? hit.desc : hit.asc));
		}
	}
};
