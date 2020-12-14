import { store } from 'store';
import { SET_CURRENT_SITE, SET_CURRENT_POSTS, selectTotalPosts } from 'Slices/List';
import { Action, AnyAction } from '@reduxjs/toolkit';

const dispatch = (event: AnyAction) => store.dispatch(event);

export const postHandler = () => {
	const {
		totalPosts,
		sortOrder: { isDateDesc, isDateOrder, isHitDesc },
		currentSite,
		currentPost,
	} = store.getState().list;

	totalPosts.forEach(({ date, from, hit }) => {
		if (from === currentSite) {
			if (isDateOrder) {
				dispatch(SET_CURRENT_POSTS(isDateDesc ? date.desc : date.asc));
			} else {
				dispatch(SET_CURRENT_POSTS(isHitDesc ? hit.desc : hit.asc));
			}
		}
	});
};
