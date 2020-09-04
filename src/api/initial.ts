import { xios } from 'api';

const { dir, log } = console;

const GET_API_LIST = () => {
	return xios.post('/getAddress').then(({ data, status }) => {
		return { data, status };
	});
};

export { GET_API_LIST };
