import React, { useState } from 'react';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';
import { Post } from 'container/System/Slice';

interface Props {
	posts: Post[];
	isPostLoaded: boolean;
}

const openrRenderer = (count: number, posts: Post[]) => {
	const holder = [];
	for (let i = 10; i <= 10 * count; i += 10) {
		holder.push(
			<button
				type='button'
				className='btn'
				key={`PostOpener > ${i}`}
				onClick={() => {
					for (let j = i - 9; j < i; j++) {
						window.open(posts[j]?.link);
					}
				}}>
				{i}
			</button>,
		);
	}
	return holder;
};

export const PostOpener = ({ isDark, isPostLoaded, posts }: Props & Essential) => {
	const [cnt, setCnt] = useState<number>(10);
	const limit: number = posts?.length / 10 || 0;
	const givenLimit: number = 50;
	return (
		<Wrapper>
			<div className='cnt_handelr'>
				<div className='desc'>버튼의 갯수를 조절할 수 있습니다.</div>
				<input
					className='cnt_input'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						const { valueAsNumber, maxLength } = e.target;
						setCnt(valueAsNumber > maxLength ? maxLength : valueAsNumber);
					}}
					value={cnt}
					type='number'
					inputMode='numeric'
					minLength={0}
					maxLength={limit > givenLimit ? givenLimit : limit}
				/>
			</div>
			<div className='btn_group'>{isPostLoaded && openrRenderer(cnt, posts)}</div>
		</Wrapper>
	);
};
