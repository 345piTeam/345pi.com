import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import PortableText from "react-portable-text";
import { sanityClient } from "../sanity";
import { Whitepaper } from "../typings";

const serializers = {
	normal: ({ children }: any) => {
		if (children.length === 1 && children[0] === "") {
			return <br />;
		}
		return (
			<p style={{ fontFamily: "Sans-Serif", fontSize: "18px" }}>{children}</p>
		);
	},
	h1: ({ children }: any) => {
		return (
			<h1 className="text-2xl lg:text-5xl font-bold underline underline-offset-4 pt-8 pb-4">
				{children}
			</h1>
		);
	},
	h2: ({ children }: any) => {
		return (
			<h2 className="text-[24px] lg:text-3xl font-bold pt-4">{children}</h2>
		);
	},
	h3: ({ children }: any) => {
		return <h3 className="lg:text-xl font-bold pt-2">{children}</h3>;
	},
};

const WhitepaperPage = ({ whitepaper }: { whitepaper: Whitepaper }) => {
	return (
		<>
			<Head>
				<title>345pi - whitepaper</title>
			</Head>
			<div className="flex flex-col items-center gap-6">
				<div className="mx-[5%] lg:mx-[15%]">
					<PortableText
						content={whitepaper.body}
						serializers={serializers}
						projectId={process.env.NEXT_PUBLIC_SANITY_ID}
						dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					/>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const query = `*[_type == "whitepaper" && !(_id in path('drafts.**'))][0] {
		title,
		body,
	}`;

	const whitepaper = await sanityClient.fetch(query);

	if (!whitepaper) {
		return { notFound: true };
	}

	return {
		props: {
			whitepaper: whitepaper,
		},
	};
};

export default WhitepaperPage;
