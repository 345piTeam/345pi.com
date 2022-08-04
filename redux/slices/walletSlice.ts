import { createSlice } from "@reduxjs/toolkit";

interface WalletData {
	address: string;
}

const initialState: WalletData = {
	address: "",
};

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		setAddress: (state, { payload }) => {
			state.address = payload;
		},
	},
});

export const { setAddress } = walletSlice.actions;

export default walletSlice.reducer;
