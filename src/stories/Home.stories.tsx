import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Home } from 'container/Home';

export default {
	title: 'Home',
	// component: Home,
	decorators: [withKnobs, (story: any) => <Provider store={store}> {story()} </Provider>],
};

export const Home_ = () => {
	return <Home />;
};
