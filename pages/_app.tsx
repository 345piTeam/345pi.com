import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export function DefaultLayout({ children }: { children: ReactElement }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	if (Component.getLayout) {
		return <>{Component.getLayout(pageProps)}</>;
	}

	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}

export default MyApp;
