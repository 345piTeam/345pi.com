import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../../public/345pi_logo.png";
import pi345_logo_dark from "../../public/345pi_logo_darkMode.png";
import { useTheme } from "next-themes";
import ThemeToggle from "./themeToggle";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
	{ name: "home", path: "/" },
	{ name: "about", path: "/about" },
	{ name: "whitepaper", path: "/whitepaper" },
	{ name: "news", path: "/news" },
];

export default function Navbar() {
	const { resolvedTheme } = useTheme();
	const menuRef = useRef<HTMLDivElement>(null);
	const [closeBurger, setCloseBurger] = useState(true);
	const router = useRouter();

	const toggleMenu = () => {
		if (menuRef && menuRef.current) {
			menuRef.current.classList.toggle("-translate-y-full");
			menuRef.current.classList.toggle("translate-y-[50%]");
		}
		setCloseBurger((prev) => !prev);
	};

	return (
		<nav className="flex flex-row w-screen items-center mb-5 pr-0 sm:pr-10 bg-white dark:bg-transparent z-10 h-24 shadow-md">
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
					<FaBars onClick={() => toggleMenu()} />
				) : (
					<FaTimes onClick={() => toggleMenu()} />
				)}
			</div>
			<div
				className="flex flex-col sm:flex-row gap-0 h-screen w-screen sm:w-auto sm:h-24 absolute sm:relative justify-center grow text-center align-middle cursor-pointer -translate-y-full sm:-translate-y-2 bg-white sm:bg-transparent shadow-md sm:shadow-none"
				ref={menuRef}
			>
				{navItems.map(({ name, path }, i) => (
					<Link href={path} key={i}>
						<h2
							onClick={() => toggleMenu()}
							className={
								"text-2xl grow-0 sm:grow hover:underline transition-all duration-200 ease-in-out underline-offset-8 leading-[5] uppercase" +
								(router.asPath === path ||
								(router.asPath === "/" && path === "/home")
									? " underline"
									: "")
							}
						>
							{name}
						</h2>
					</Link>
				))}
			</div>
			<a href="https://345pi.us/" target="_blank" rel="noreferrer">
				<div className="absolute right-6 top-6 sm:relative sm:right-0 sm:top-0 flex justify-center items-center cursor-pointer bg-green-600 hover:bg-green-700 px-8 h-12 rounded-full">
					<h2 className="text-white text-md lg:text-lg">Launch App</h2>
				</div>
			</a>
			<ThemeToggle />
		</nav>
	);
}
