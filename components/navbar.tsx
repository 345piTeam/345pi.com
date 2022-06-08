import Link from "next/link";
import Image from "next/image";
import pi345_logo from "../public/345pi_logo.png";

export default function Navbar() {
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
			<div>Launch App</div>
		</div>
	);
}
