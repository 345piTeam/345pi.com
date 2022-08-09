import Head from "next/head";
import React from "react";
import { FunctionComponent } from "react";
import TitleHexagon from "../components/homepage/hexagon";
import HomescreenInfo from "../components/homepage/homescreenInformation";
import NetworkVideo from "../components/homepage/networkVideo";
import { sanityClient } from "../sanity";
import { HomepageInformation, NftInfo } from "../typings";

interface Props {
	info: HomepageInformation[];
	nftInfo: NftInfo[];
}

const Home: FunctionComponent<Props> = ({ info, nftInfo }) => {
	const contentRef = React.createRef();

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
				<div className="flex flex-row justify-evenly gap-0 items-top">
					<NetworkVideo className="max-w-[450px] opacity-50 hidden lg:block" />
					<TitleHexagon contentRef={contentRef} />
					<NetworkVideo
						className="max-w-[450px] opacity-50 hidden lg:block"
						flipped={true}
					/>
				</div>
				<HomescreenInfo info={info} myRef={contentRef} />
			</main>
		</div>
	);
};

export const getStaticProps = async () => {
	const query1 = `*[_type == "homepage-information"] | order(_createdAt asc) {
		title,
		body,
		slug,
		mainImage
	  }`;
	const info = await sanityClient.fetch(query1);

	const query2 = `*[_type == "nft-information"] | order(_createdAt asc) {
		title,
		body,
		slug,
		mainImage
	  }`;
	const nftInfo = await sanityClient.fetch(query2);

	if (!info || !nftInfo) {
		// If there is a server error, you might want to
		// throw an error instead of returning so that the cache is not updated
		// until the next successful request.
		throw new Error(`Failed to fetch posts, received status ${info.status}`);
	}

	return {
		props: {
			info,
			nftInfo,
		},
		revalidate: 300,
	};
};

export default Home;
