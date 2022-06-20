import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem = (name: string, path: string) => {
	const router = useRouter();

	return (
		<Link href={path}>
			<h2
				className={
					"text-2xl grow hover:underline transition-all duration-200 ease-in-out underline-offset-8 leading-[5] uppercase" +
					(router.asPath === path || (router.asPath === "/" && path === "/home")
						? " underline"
						: "")
				}
			>
				{name}
			</h2>
		</Link>
	);
};

export default NavbarItem;
