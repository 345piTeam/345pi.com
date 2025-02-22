import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
						rel="stylesheet"
					/>
					<meta charSet="UTF-8" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body className="dark:bg-gray-900 dark:text-white">
					<div className="overflow-x-hidden ">
						<Main />
						<NextScript />
					</div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
