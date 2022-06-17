import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem = (name: string, path: string) => {
	const router = useRouter();

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

export default NavbarItem;
