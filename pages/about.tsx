import Head from "next/head";
import React from "react";
import TeamMember from "../components/about/teamMember";
import { sanityClient } from "../sanity";
import { DarkLord } from "../typings";

interface Props {
	data: DarkLord[];
}

const About: React.FC<Props> = ({ data }) => {
	return (
		<>
			<Head>
				<title>345pi - about</title>
			</Head>
			<div className="w-full flex justify-center text-4xl">
				<h1>Our Team</h1>
			</div>
			<div className="m-6 flex flex-row justify-center flex-wrap gap-y-4 gap-x-12 xl:gap-x-0">
				{data.map((darkLord, i) => (
					<TeamMember key={i} data={darkLord} />
				))}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const query = `*[_type == "darkLord"] {
		name,
		image,
		bio,
	}`;

	const data = await sanityClient.fetch(query);

	if (!data) {
		throw new Error(`Failed to fetch posts, received status ${data.status}`);
	}

	return {
		props: {
			data,
		},
		revalidate: 600,
	};
};

export default About;
