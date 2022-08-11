import { ReactElement } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/navbar";
import ScrollToTop from "../components/miscellaneous/ScrollToTop";

export function DefaultLayout({ children }: { children: ReactElement }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="grow">
				<div className="mt-24 md:mt-0">{children}</div>
			</main>
			<Footer />
			{/* <ScrollToTop /> */}
		</div>
	);
}
