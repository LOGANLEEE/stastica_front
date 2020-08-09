import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider, useDispatch } from 'react-redux';
import { store } from 'store';
import { Apis, initializing } from 'api';

const { log, dir } = console;

export default {
	title: 'API',
	// component: Home,
	decorators: [withKnobs, (storyFn: any) => <Provider store={store}> {storyFn()} </Provider>],
};

export const TOTAL = () => (
	<Provider store={store}>
		{' '}
		<APIs_ />{' '}
	</Provider>
);

export const APIs_ = () => {
	const { initial } = Apis;
	const { GET_API_LIST } = initial;
	const dispatch = useDispatch();
	return (
		<>
			<button
				onClick={() => {
					GET_API_LIST().then((e) => dir(e));
				}}
			>
				GET_API_LIST{' '}
			</button>
			<button
				onClick={() => {
					initializing();
				}}
			>
				initializing{' '}
			</button>
		</>
	);
};
