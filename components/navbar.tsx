import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../public/345pi_logo.png";
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
				<Image
					className="scale-90 -translate-x-2"
					alt="345pi Logo"
					src={pi345_logo}
				/>
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
			>
				<h1>&#x2600;</h1>
			</button>
			<div>Launch App</div>
		</div>
	);
}
