import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Stastica } from 'container/Stastica';

export default {
	title: 'Stastica',
	// component: Home,
	decorators: [
		withKnobs,
		(story: any) => <Provider store={store}> {story()} </Provider>,
	],
};

export const Stastica_ = () => <Stastica />;
