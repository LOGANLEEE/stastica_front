import { xios } from 'api';

const { dir, log } = console;

const GET_API_LIST = () => {
	return xios.post('/getApiList').then((e) => e?.data);
};

export { GET_API_LIST };
