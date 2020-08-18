import { xios } from 'api';

const { dir, log } = console;

export const GET_ALL_POSTS = (url: string) => {
	return xios.post(url).then((e) => e?.data);
};

export const data = {
	GET_ALL_POSTS,
};
