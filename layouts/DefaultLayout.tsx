import { ReactElement } from "react";
import Navbar from "../components/navbar";

export function DefaultLayout({ children }: { children: ReactElement }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
