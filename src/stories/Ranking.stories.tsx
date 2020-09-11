import React, { useEffect, useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Ranking } from '../container/Ranking';
import { initializing } from 'api';

export default {
	title: 'Ranking',
	// component: Home,
	decorators: [withKnobs, (story: any) => <Provider store={store}> {story()} </Provider>],
};

export const Ranking_ = () => {
	useEffect(() => {
		initializing();
	}, []);
	return (
		<div style={{ height: '100vh' }}>
			<Ranking />;
		</div>
	);
};
