import { ReactElement } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/navbar";

export function DefaultLayout({ children }: { children: ReactElement }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="grow">{children}</main>
			<Footer />
		</div>
	);
}
