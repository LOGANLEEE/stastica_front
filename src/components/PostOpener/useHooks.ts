import { useState } from 'react';
import { Post } from 'Slices/List';

interface Props {
	posts: Post[];
}

/**
 * length 400
 * count = 30
 * limit = 400/30
 * @param param0
 */

export const useHooks = ({ posts }: Props) => {
	const [count, setCount] = useState<number>(20);
	const limit: number = (posts?.length || 0) / count;
	return {
		limit,
		count,
		action: {
			setCount,
		},
	};
};
