import { Essential } from 'app';
import React from 'react';
import { Post } from 'Slices/List';
import { v4 as uuid } from 'uuid';
import { Button } from './Button';
import { useHooks } from './useHooks';
import { Wrapper } from './Wrapper';

interface Props {
	posts: Post[];
	isPostLoaded: boolean;
}
const openrRenderer = (count: number, limit: number, posts: Post[]) => {
	const holder = [];

	for (let i = 0; i <= posts?.length; i += count) {
		const temp: Post[] = posts?.slice(i, i + count);
		holder.push(<Button key={uuid()} start={i + count} posts={temp} />);
	}
	return holder;
};

export const PostOpener = ({ isDark, isPostLoaded, posts }: Props & Essential) => {
	const {
		limit,
		count,
		action: { setCount },
	} = useHooks({ posts });
	return (
		<Wrapper>
			<div className='cnt_handelr'>
				<div className='desc'> 열 탭의 갯수를 조절할 수 있습니다.</div>
				<input
					className='cnt_input'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						let { valueAsNumber: val, max, min } = e.target;
						/**
						 * TODO:
						 *
						 *  ! have to implement debounce for onchange action to validate value
						 */
						setCount(val);
					}}
					value={count}
					type='number'
					inputMode='numeric'
					min={5}
					max={50}
				/>
			</div>
			<div className='btn_group'>{isPostLoaded && openrRenderer(count, limit, posts)}</div>
		</Wrapper>
	);
};
