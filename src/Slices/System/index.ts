import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface SystemState {
	address: any;
	isAddreadLoaded: boolean;
}

const initialState: SystemState = {
	isAddreadLoaded: false,
	address: {},
};

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		SET_ADDRESS_STATUS: (state: SystemState, action: PayloadAction<boolean>) => {
			state.isAddreadLoaded = action.payload;
		},
		SET_ADDRESS: (state: SystemState, action: PayloadAction<object>) => {
			state.address = action.payload;
		},
	},
});

export const { SET_ADDRESS_STATUS, SET_ADDRESS } = systemSlice.actions;

export const selectAddress = (state: RootState) => state.system.address;

export default systemSlice.reducer;
