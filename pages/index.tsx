/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Hexagon from "../components/hexagon";
import hexagon from "../public/hexagon-homescreen-with-text.png";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>345pi</title>
				<meta
					name="description"
					content="Information site for the 345pi web3 application"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="flex justify-center">
					<Image
						alt="Hexagon Background Image"
						src={hexagon}
						height={550}
						width={500}
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;
