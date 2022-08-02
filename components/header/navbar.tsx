import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../../public/345pi_logo.png";
import pi345_logo_dark from "../../public/345pi_logo_darkMode.png";
import { useTheme } from "next-themes";
import ThemeToggle from "./themeToggle";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ethers } from "ethers";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setWallet } from "../../redux/slices/walletSlice";

interface Window {
	ethereum?: import("ethers").providers.ExternalProvider;
}

declare let window: Window;

const navItems = [
	{ name: "home", path: "/" },
	{ name: "about", path: "/about" },
	{ name: "whitepaper", path: "/whitepaper" },
	{ name: "news", path: "/news" },
];

export const getShortAddress = (address: string) => {
	const length = address.length;
	return address.slice(0, 5) + "..." + address.slice(length - 4, length);
};

export default function Navbar() {
	const { resolvedTheme } = useTheme();
	const menuRef = useRef<HTMLDivElement>(null);
	const [closeBurger, setCloseBurger] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { address } = useAppSelector((state) => state.wallet);

	const toggleMenu = () => {
		if (menuRef && menuRef.current) {
			menuRef.current.classList.toggle("-translate-y-full");
			menuRef.current.classList.toggle("translate-y-[50%]");
		}
		setCloseBurger((prev) => !prev);
	};

	useEffect(() => {
		if (address) {
			connectWallet();
		}
		// Ensure function only runs once
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const connectWallet = async () => {
		if (window.ethereum) {
			// A Web3Provider wraps a standard Web3 provider, which is
			// what MetaMask injects as window.ethereum into each page
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			// MetaMask requires requesting permission to connect users accounts
			await provider.send("eth_requestAccounts", []);

			// The MetaMask plugin also allows signing transactions to
			// send ether and pay to change state within the blockchain.
			// For this, you need the account signer...
			const signer = provider.getSigner();
			const address = await signer.getAddress();
			dispatch(setWallet(address));
		}
	};

	return (
		<nav className="flex flex-row w-full items-center mb-5 pr-0 sm:pr-10 bg-white dark:bg-transparent z-10 h-24 shadow-md dark:shadow-none">
			<Link href="/">
				<a>
					<div className="scale-75 -translate-x-8 cursor-pointer hidden lg:block">
						{resolvedTheme === "light" ? (
							<Image alt="345pi Logo" src={pi345_logo} />
						) : (
							<Image alt="345pi Logo" src={pi345_logo_dark} />
						)}
					</div>
				</a>
			</Link>
			<div className="cursor-pointer text-2xl ml-6 block sm:hidden my-10 z-50">
				{closeBurger ? (
					<FaTimes onClick={() => toggleMenu()} />
				) : (
					<FaBars onClick={() => toggleMenu()} />
				)}
			</div>
			<div
				className="flex flex-col sm:flex-row gap-0 h-screen sm:w-auto sm:h-24 absolute sm:relative justify-center grow text-center align-middle cursor-pointer -translate-y-full sm:-translate-y-2 bg-white dark:bg-gray-900 sm:bg-transparent shadow-md sm:shadow-none"
				ref={menuRef}
			>
				{navItems.map(({ name, path }, i) => (
					<Link href={path} key={i}>
						<a className="grow-0 sm:grow">
							<h2
								onClick={() => toggleMenu()}
								className={
									"text-2xl hover:underline underline-offset-8 leading-[5] uppercase h-full" +
									(router.asPath === path ||
									(router.asPath === "/" && path === "/home")
										? " underline"
										: "")
								}
							>
								{name}
							</h2>
						</a>
					</Link>
				))}
			</div>
			<div
				className="absolute right-6 top-6 sm:relative sm:right-0 sm:top-0 flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-blue-400 px-8 h-12 rounded-full"
				onClick={connectWallet}
			>
				<h2 className="text-white text-md lg:text-lg">
					{address ? getShortAddress(address) : "Connect Wallet"}
				</h2>
			</div>
			<ThemeToggle />
		</nav>
	);
}
