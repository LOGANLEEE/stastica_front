import { configureStore, ThunkAction, Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import homeReducer from 'container/Home/Slice';
import uiReducer from 'container/Ui/Slice';
import systemReducer from 'container/System/Slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		home: homeReducer,
		ui: uiReducer,
		system: systemReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
