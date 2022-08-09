import { useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineCopy } from "react-icons/ai";
import { setAddress, toggleModal } from "../../redux/slices/walletSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getShortAddress } from "./walletConnection";

export const etherscanURL = "https://etherscan.io/address/";

const AccountModal = () => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();
	const { address, ensName } = useAppSelector((state) => state.wallet);

	return (
		<div
			className="fixed top-0 bottom-0 left-0 right-0 bg-black/25 flex flex-row justify-center"
			onClick={(e) => {
				{
					e.target === backgroundRef.current && dispatch(toggleModal());
				}
			}}
			ref={backgroundRef}
		>
			<div className="bg-white relative w-[25%] max-h-48 mt-36 p-3 rounded-sm flex flex-col text-black">
				<div className="flex flex-row justify-between">
					<p>Account Information</p>
					<button onClick={() => dispatch(toggleModal())}>
						<AiOutlineClose className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
					</button>
				</div>
				<div className="border-gray-100 border-2 h-20 m-4 p-2 rounded-lg flex flex-col justify-between">
					<div className="flex flex-row">
						<div ref={imageRef}></div>
						<p>{ensName !== "" ? ensName : getShortAddress(address)}</p>
						<AiOutlineCopy className="text-xl cursor-pointer text-blue-600" />
					</div>
					<a
						className="text-sm text-blue-600 cursor-pointer hover:underline w-fit"
						href={etherscanURL + address}
						target="_blank"
						rel="noreferrer"
					>
						View on Etherscan
					</a>
				</div>
				<button
					className="w-full bg-slate-600 hover:bg-slate-700 py-1 text-white rounded-lg"
					onClick={() => {
						dispatch(toggleModal());
						dispatch(setAddress(""));
					}}
				>
					Disconnect Wallet
				</button>
			</div>
		</div>
	);
};

export default AccountModal;
