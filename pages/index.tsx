import Head from "next/head";
import { FunctionComponent } from "react";
import TitleHexagon from "../components/homepage/hexagon";
import HomescreenInfo from "../components/homepage/homescreenInformation";
import { sanityClient } from "../sanity";
import { Information } from "../typings";

interface Props {
	info: Information[];
}

const Home: FunctionComponent<Props> = ({ info }) => {
	return (
		<div>
			<Head>
				<title>345pi</title>
				<meta
					name="description"
					content="Information site for the 345pi.us web3 application"
				/>
			</Head>

			<main>
				<div className="flex justify-center">
					<TitleHexagon />
				</div>
				<HomescreenInfo info={info} />
			</main>
		</div>
	);
};

export const getStaticProps = async () => {
	const query = `*[_type == "information"] | order(_createdAt asc) {
		title,
		body,
		slug,
		mainImage
	  }`;
	const info = await sanityClient.fetch(query);

	if (!info) {
		// If there is a server error, you might want to
		// throw an error instead of returning so that the cache is not updated
		// until the next successful request.
		throw new Error(`Failed to fetch posts, received status ${info.status}`);
	}

	return {
		props: {
			info,
		},
		revalidate: 600,
	};
};

export default Home;
