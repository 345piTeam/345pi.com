import { createSlice } from "@reduxjs/toolkit";
import { Signer } from "ethers";

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
		setWallet: (state, { payload }) => {
			state.address = payload;
		},
	},
});

export const { setWallet } = walletSlice.actions;

export default walletSlice.reducer;
