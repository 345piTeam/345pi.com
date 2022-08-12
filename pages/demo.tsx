import { sanityClient, urlFor } from "../sanity";
import { DemoData } from "../typings";
import Image from "next/image";
import PortableText from "react-portable-text";
import Head from "next/head";

interface Props {
	demoData: DemoData[];
}

const Demo: React.FC<Props> = ({ demoData }) => {
	return (
		<>
			<Head>
				<title>345pi - demo</title>
			</Head>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
				{demoData.map((data, i) => {
					return (
						<div
							key={i}
							className="basis-1/3 flex flex-col items-center my-6 md:my-0"
						>
							<div className="relative h-[500px] w-[90%]">
								<Image
									src={urlFor(data.image).url()}
									alt="Demo Image"
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
							</div>
							<h2 className="w-full text-center text-3xl">{data.title}</h2>
							<PortableText content={data.body} className="mx-6" />
						</div>
					);
				})}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const query = `*[_type == "demo"] {
		title,
		body,
		slug,
		image
	}`;
	const demoData = await sanityClient.fetch(query);

	if (!demoData) {
		// If there is a server error, you might want to
		// throw an error instead of returning so that the cache is not updated
		// until the next successful request.
		throw new Error(
			`Failed to fetch posts, received status ${demoData.status}`
		);
	}

	return {
		props: {
			demoData,
		},
		revalidate: 600,
	};
};

export default Demo;
