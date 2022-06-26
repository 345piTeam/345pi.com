import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../../public/345pi_logo.png";
import pi345_logo_dark from "../../public/345pi_logo_darkMode.png";
import { useTheme } from "next-themes";
import ThemeToggle from "./themeToggle";
import NavbarItem from "./navbarItem";

export default function Navbar() {
	const { resolvedTheme } = useTheme();

	return (
		<div className="flex flex-row w-[97%] items-center mb-5">
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
			<div className="flex flex-row justify-between w-fit grow text-center align-middle cursor-pointer">
				{NavbarItem("home", "/")}
				{NavbarItem("about", "/about")}
				{NavbarItem("whitepaper", "/whitepaper")}
				{NavbarItem("news", "/news")}
			</div>
			<a href="https://345pi.us/" target="_blank" rel="noreferrer">
				<div className="flex justify-center items-center cursor-pointer bg-green-600 hover:bg-green-700 px-8 h-12 rounded-full">
					<h2 className="text-white text-sm lg:text-lg">Launch App</h2>
				</div>
			</a>
			<ThemeToggle />
		</div>
	);
}
