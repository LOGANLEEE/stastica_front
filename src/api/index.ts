import axios from 'axios';
import { GET_API_LIST } from 'api/initial';
import { GET_ALL_POSTS } from 'api/data';
import { SET_LOADING, SET_APILIST, SET_POSTS } from 'container/System/Slice';
import { store } from 'store';

const { dir, log } = console;

dir(process.env);
const a: string | undefined = process.env.REACT_APP_END_POINT_URL || 'http://localhost';
const b: string | undefined = process.env.REACT_APP_END_POINT_PORT || ':1';

const baseURL: string = a + b;

export const xios = axios.create({
	baseURL,
});

export const initializing = () => {
	GET_API_LIST()
		.then((e) => {
			if (e) {
				store.dispatch(SET_APILIST(e));
			}
		})
		.then((e) => {
			GET_ALL_POSTS(store.getState().system.apiList?.A1)
				.then((e) => {
					store.dispatch(SET_POSTS(e));
				})
				.then(() => {
					store.dispatch(SET_LOADING(true));
				});
		})
		.catch((e) => window.alert(`${e}`));
};

export const Apis = { initial: { GET_API_LIST } };
