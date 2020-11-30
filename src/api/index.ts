import { GET_DATA } from 'api/data';
import { GET_API_LIST } from 'api/initial';
import axios from 'axios';
import { SET_VIEW_OPTION } from 'container/Ui/Slice';
import {
	ReceivePostSet,
	SET_COMMUNITY_LIST,
	SET_COMMUNITY_POSTS,
	SET_INIT_POST,
	SET_POSTS,
	SET_POST_STATUS,
} from 'Slices/List';
import { selectAddress, SET_ADDRESS, SET_ADDRESS_STATUS } from 'Slices/System';
import { store } from 'store';

const { dir, log } = console;

// dir(process.env);
const a: string | undefined = process.env.REACT_APP_END_POINT_URL || 'http://localhost';
const b: string | undefined = process.env.REACT_APP_END_POINT_PORT || ':1';

const baseURL: string = a + b;

export const xios = axios.create({
	baseURL,
});

export const initializing = () => {
	initListViewOption();
	getAddress().then((e) => {
		if (e) {
			postProcess();
			getCommunity();
		}
	});
};

const initListViewOption = () => {
	const key: string = 'viewOption';
	const item = localStorage.getItem(key);
	if (item) {
		store.dispatch(SET_VIEW_OPTION(JSON.parse(item)));
	} else {
		localStorage.setItem(key, JSON.stringify(store.getState().ui.viewOption));
	}
};

const getAddress = () => {
	return GET_API_LIST()
		.then(({ data, status }) => {
			if (status === 200) {
				store.dispatch(SET_ADDRESS(data));
				store.dispatch(SET_ADDRESS_STATUS(true));
				return true;
			} else {
				return false;
			}
		})
		.catch((e) => {
			log(`[getAddress] ${e}`);
			setTimeout(() => {
				getAddress();
			}, 3000);
		});
};

const postProcess = () => {
	const { A1 } = selectAddress(store.getState());
	GET_DATA(A1)
		.then(({ data, status }) => {
			if (status === 200) {
				/* 
				repair requested
				- need to resolve messy type declare
				 */
				const { community_posts, initPost }: ReceivePostSet = data;

				store.dispatch(SET_COMMUNITY_POSTS(community_posts));
				store.dispatch(SET_INIT_POST(initPost));
				store.dispatch(SET_POSTS(initPost.hit.desc));
				// store.dispatch(SET_SELECTED_COMMUNITY(initPost.hit.desc));
				store.dispatch(SET_POST_STATUS(true));
			}
		})
		.catch((e) => {
			log(`[postProcess] ${e}`);
			setTimeout(() => {
				postProcess();
			}, 3000);
		});
};

const getCommunity = () => {
	const { A5 } = selectAddress(store.getState());
	GET_DATA(A5).then(({ data, status }) => {
		if (status === 200) {
			store.dispatch(SET_COMMUNITY_LIST(data));
		}
	});
};

export const Apis = { initial: { GET_API_LIST } };
