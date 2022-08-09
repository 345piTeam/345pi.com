import { createSlice } from "@reduxjs/toolkit";

interface WalletData {
	address: string;
	ensName: string;
	accountModal: boolean;
}

const initialState: WalletData = {
	address: "",
	ensName: "",
	accountModal: false,
};

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		setAddress: (state, { payload }) => {
			state.address = payload;
		},
		setEnsName: (state, { payload }) => {
			state.ensName = payload;
		},
		toggleModal: (state) => {
			state.accountModal = !state.accountModal;
		},
	},
});

export const { setAddress, setEnsName, toggleModal } = walletSlice.actions;

export default walletSlice.reducer;
