import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Ranking } from '../container/Ranking';

export default {
	title: 'Ranking',
	// component: Home,
	decorators: [withKnobs, (story: any) => <Provider store={store}> {story()} </Provider>],
};

export const Ranking_ = () => (
	<div style={{ height: '100vh' }}>
		<Ranking />
	</div>
);
