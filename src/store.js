import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'container/Home/Slice';
import uiReducer from 'container/Ui/Slice';

export default configureStore({
	reducer: {
		home: homeReducer,
		ui: uiReducer,
	},
});
