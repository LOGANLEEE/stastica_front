import { xios } from 'api';

const { dir, log } = console;

export const GET_API_POSTS = (url: string) => {
	return xios.post(url).then((e) => e?.data);
};

export const data = {
	GET_API_POSTS,
};
