import { xios } from 'api';

const { dir, log } = console;

export const GET_ALL_POSTS = (url: string) => {
	return xios.post(url).then(({ data, status }) => {
		return { data, status };
	});
};

export const data = {
	GET_ALL_POSTS,
};
