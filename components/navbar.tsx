import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../public/345pi_logo.png";
import pi345_logo_dark from "../public/345pi_logo_darkMode.png";
import { useState } from "react";

export default function Navbar() {
	const LIGHT_THEME = "light";
	const DARK_THEME = "dark";
	const [theme, setTheme] = useState(LIGHT_THEME);
	const switchTheme = () => {
		if (!document.documentElement.classList.contains(DARK_THEME)) {
			document.documentElement.classList.add(DARK_THEME);
			setTheme(DARK_THEME);
		} else {
			document.documentElement.classList.remove(DARK_THEME);
			setTheme(LIGHT_THEME);
		}
	};

	return (
		<div className="h-28 flex flex-row">
			<Link href="/">
				{theme === LIGHT_THEME ? (
					<Image
						className="scale-90 -translate-x-2 cursor-pointer"
						alt="345pi Logo"
						src={pi345_logo}
					/>
				) : (
					<Image
						className="scale-90 -translate-x-2 cursor-pointer"
						alt="345pi Logo"
						src={pi345_logo_dark}
					/>
				)}
			</Link>
			<div className="">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/whitepaper">whitepaper</Link>
				<Link href="/news">News</Link>
			</div>
			<button
				onClick={() => {
					switchTheme();
				}}
				className="absolute right-2 top-2 text-3xl"
			>
				{theme === LIGHT_THEME ? (
					<h1>&#x2600;</h1>
				) : (
					<h1 className="-translate-x-2"> &#x263d;</h1>
				)}
			</button>
			<div>Launch App</div>
		</div>
	);
}
