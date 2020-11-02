import React, { useState } from 'react';

import { Essential } from 'app';

import { Wrapper } from './Wrapper';
import { Post } from 'Slices/System';

interface Props {
	posts: Post[];
	isPostLoaded: boolean;
}

const openrRenderer = (count: number, limit: number, posts: Post[], btnGroup: Array<any>, setBtnGroup: Function) => {
	const holder = [];
	for (let i = 10; i <= 10 * (count === 0 ? limit : count); i += 10) {
		holder.push(
			<button
				type='button'
				// className={`btn ${isClicked ? 'clicked' : ''}`}
				className={`btn`}
				key={`PostOpener > ${i}`}
				onClick={() => {
					for (let j = i - 10; j < i; j++) {
						window.open(posts[j]?.link);
						// setIsClicked(prev => {...prev,prev[i][j]=true});
					}
				}}>
				{i}
			</button>,
		);
	}
	return holder;
};

export const PostOpener = ({ isDark, isPostLoaded, posts }: Props & Essential) => {
	const [count, setCount] = useState<number>(0);
	const limit: number = posts?.length / 10 || 0;
	const givenLimit: number = 50;
	const [btnGroup, setBtnGroup] = useState<Array<any>>([]);

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
			<div className='btn_group'>{isPostLoaded && openrRenderer(count, limit, posts, btnGroup, setBtnGroup)}</div>
		</Wrapper>
	);
};
