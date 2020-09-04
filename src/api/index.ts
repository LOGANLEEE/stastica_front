import axios from 'axios';

import { GET_API_LIST } from 'api/initial';
import { GET_ALL_POSTS } from 'api/data';
import { SET_POST_STATUS, SET_ADDRESS, SET_POSTS, SET_ADDRESS_STATUS, selectAddress } from 'container/System/Slice';
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
	getAddress().then((e) => {
		if (e) {
			log(e);
			postProcess();
		}
	});
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
	GET_ALL_POSTS(A1)
		.then(({ data, status }) => {
			if (status === 200) {
				store.dispatch(SET_POSTS(data));
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

export const Apis = { initial: { GET_API_LIST } };
