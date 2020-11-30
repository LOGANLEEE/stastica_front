import React from 'react';

import { Essential } from 'app';
import { Post } from 'Slices/List';

import { Wrapper } from './Wrapper';
import { useHooks } from './useHooks';
import { Button } from './Button';

interface Props {
	posts: Post[];
	isPostLoaded: boolean;
}
const openrRenderer = (count: number, limit: number, posts: Post[]) => {
	const holder = [];
	for (let i = 10; i <= 10 * (count === 0 ? limit : count); i += 10) {
		const temp: Post[] = posts.slice(i - 10, i);
		holder.push(<Button key={`${JSON.stringify(temp)}`} start={i} posts={temp} />);
	}
	return holder;
};

export const PostOpener = ({ isDark, isPostLoaded, posts }: Props & Essential) => {
	const {
		limit,
		count,
		givenLimit,
		action: { setCount },
	} = useHooks({ posts });
	return (
		<Wrapper>
			<div className='cnt_handelr'>
				<div className='desc'>버튼의 갯수를 조절할 수 있습니다.</div>
				<input
					className='cnt_input'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						let { valueAsNumber, maxLength } = e.target;
						setCount(valueAsNumber > maxLength ? maxLength : valueAsNumber);
					}}
					value={count}
					type='number'
					inputMode='numeric'
					minLength={1}
					maxLength={limit > givenLimit ? givenLimit : limit}
					min={1}
				/>
			</div>
			<div className='btn_group'>{isPostLoaded && openrRenderer(count, limit, posts)}</div>
		</Wrapper>
	);
};
