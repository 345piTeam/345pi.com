import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../../public/345pi_logo.png";
import pi345_logo_dark from "../../public/345pi_logo_darkMode.png";
import { useTheme } from "next-themes";
import ThemeToggle from "./themeToggle";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ConnectWallet from "./walletConnection";
import AccountModal from "./accountModal";
import { useAppSelector } from "../../redux/store";

const navItems = [
	{ name: "home", path: "/" },
	{ name: "about", path: "/about" },
	{ name: "whitepaper", path: "/whitepaper" },
	{ name: "news", path: "/news" },
	{ name: "demo", path: "/demo" },
];

export default function Navbar() {
	const { resolvedTheme } = useTheme();
	const menuRef = useRef<HTMLDivElement>(null);
	const [closeBurger, setCloseBurger] = useState(false);
	const router = useRouter();
	const { accountModal } = useAppSelector((state) => state.wallet);

	const toggleMenu = () => {
		if (menuRef && menuRef.current) {
			menuRef.current.classList.toggle("-translate-y-full");
			menuRef.current.classList.toggle("translate-y-[50%]");
		}
		setCloseBurger((prev) => !prev);
	};

	return (
		<nav className="flex flex-row w-full items-center mb-5 pr-0 md:pr-10 bg-white dark:bg-slate-900 z-40 h-24 shadow-md dark:shadow-none fixed md:relative">
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
			<div className="cursor-pointer text-2xl ml-6 block md:hidden my-10 z-50">
				{closeBurger ? (
					<FaTimes onClick={() => toggleMenu()} />
				) : (
					<FaBars onClick={() => toggleMenu()} />
				)}
			</div>
			<div
				className="flex flex-col md:flex-row gap-0 h-screen w-full md:w-auto md:h-24 fixed md:relative justify-center grow text-center align-middle cursor-pointer -translate-y-full md:-translate-y-2 bg-white dark:bg-gray-900 md:bg-transparent shadow-md md:shadow-none"
				ref={menuRef}
			>
				{navItems.map(({ name, path }, i) => (
					<Link href={path} key={i}>
						<a className="grow-0 md:grow">
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
			{accountModal && <AccountModal />}
		</nav>
	);
}
