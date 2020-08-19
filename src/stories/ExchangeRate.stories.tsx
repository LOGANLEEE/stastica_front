import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { store } from 'store';

import { ExchangeRate } from 'container/ExchangeRate';

export default {
	title: 'ExchangeRate',
	// component: Home,
	decorators: [withKnobs, (story: any) => <Provider store={store}> {story()} </Provider>],
};

export const ExchangeRate_ = () => <ExchangeRate />;
