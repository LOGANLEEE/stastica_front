import axios from 'axios';
import { GET_API_LIST } from 'api/initial';
import { GET_API_POSTS } from 'api/data';
import { SET_LOADING, SET_APILIST, SET_POSTS } from 'container/System/Slice';
import { store } from 'store';

const { dir, log } = console;

export const xios = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const initializing = () => {
	GET_API_LIST()
		.then((e) => {
			if (e) {
				store.dispatch(SET_APILIST(e));
			}
		})
		.then((e) => {
			GET_API_POSTS(store.getState().system.apiList?.A1)
				.then((e) => {
					store.dispatch(SET_POSTS(e));
				})
				.then(() => {
					store.dispatch(SET_LOADING(true));
				});
		});
};

export const Apis = { initial: { GET_API_LIST } };
