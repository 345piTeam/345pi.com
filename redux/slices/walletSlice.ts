import { createSlice } from "@reduxjs/toolkit";

interface WalletData {
	address: string;
	accountModal: boolean;
}

const initialState: WalletData = {
	address: "",
	accountModal: false,
};

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		setAddress: (state, { payload }) => {
			state.address = payload;
		},
		toggleModal: (state) => {
			state.accountModal = !state.accountModal;
		},
	},
});

export const { setAddress, toggleModal } = walletSlice.actions;

export default walletSlice.reducer;
