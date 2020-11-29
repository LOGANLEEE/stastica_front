import { useState } from 'react';
import { Post } from 'Slices/System';

interface Props {
	posts: Post[];
}

export const useHooks = ({ posts }: Props) => {
	const [count, setCount] = useState<number>(0);
	const limit: number = posts?.length / 10 || 0;
	const givenLimit: number = 50;

	return {
		givenLimit,
		limit,
		count,
		action: {
			setCount,
		},
	};
};
