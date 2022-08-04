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
import ConnectWallet from "./walletConnection";

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

export default function Navbar() {
	const { resolvedTheme } = useTheme();
	const menuRef = useRef<HTMLDivElement>(null);
	const [closeBurger, setCloseBurger] = useState(false);
	const router = useRouter();

	const toggleMenu = () => {
		if (menuRef && menuRef.current) {
			menuRef.current.classList.toggle("-translate-y-full");
			menuRef.current.classList.toggle("translate-y-[50%]");
		}
		setCloseBurger((prev) => !prev);
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
			<ConnectWallet />
			<ThemeToggle />
		</nav>
	);
}
