import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../public/345pi_logo.png";
import pi345_logo_dark from "../public/345pi_logo_darkMode.png";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
	// TODO move to context
	const LIGHT_THEME = "light";
	const DARK_THEME = "dark";
	const [theme, setTheme] = useState(LIGHT_THEME);
	const router = useRouter();
	const switchTheme = () => {
		if (!document.documentElement.classList.contains(DARK_THEME)) {
			document.documentElement.classList.add(DARK_THEME);
			setTheme(DARK_THEME);
		} else {
			document.documentElement.classList.remove(DARK_THEME);
			setTheme(LIGHT_THEME);
		}
	};

	const NavbarItem = (name: string, path: string) => {
		let cName =
			"text-2xl grow hover:underline underline-offset-8 leading-[5] uppercase";
		cName =
			router.asPath === path || (router.asPath === "/" && path === "/home")
				? cName + " underline"
				: cName;
		return (
			<Link href={path}>
				<h2 className={cName}>{name}</h2>
			</Link>
		);
	};

	return (
		<div className="flex flex-row w-[95%] items-center mb-5">
			<Link href="/">
				{theme === LIGHT_THEME ? (
					<Image
						className="scale-75 -translate-x-8 cursor-pointer"
						alt="345pi Logo"
						src={pi345_logo}
					/>
				) : (
					<Image
						className="scale-75 -translate-x-8 cursor-pointer"
						alt="345pi Logo"
						src={pi345_logo_dark}
					/>
				)}
			</Link>
			<div className="flex flex-row justify-between w-fit grow text-center align-middle cursor-pointer">
				{NavbarItem("home", "/")}
				{NavbarItem("about", "/about")}
				{NavbarItem("whitepaper", "/whitepaper")}
				{NavbarItem("news", "/news")}
			</div>
			<a href="https://345pi.us/" target="_blank" rel="noreferrer">
				<div className="flex justify-center items-center cursor-pointer bg-green-600 hover:bg-green-700 px-8 h-12 rounded-full">
					<h2 className="-translate-y-1 text-white text-xl">Launch App</h2>
				</div>
			</a>
			<button
				onClick={() => {
					switchTheme();
				}}
				className="absolute right-1 top-2 text-3xl leading-6"
			>
				{theme === LIGHT_THEME ? (
					<h1 className="mr-2 hover:rotate-6 hover:scale-105 transition-all duration-100 ease-in-out">
						&#x2600;
					</h1>
				) : (
					<h1 className="mr-4 hover:rotate-12 hover:scale-105 transition-all duration-100 ease-in-out">
						&#x263d;
					</h1>
				)}
			</button>
		</div>
	);
}
