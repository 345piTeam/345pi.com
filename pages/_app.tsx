import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider attribute={"class"}>
					{getLayout(<Component {...pageProps} />)}
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
