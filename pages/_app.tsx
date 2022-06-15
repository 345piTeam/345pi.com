import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

	return getLayout(
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
