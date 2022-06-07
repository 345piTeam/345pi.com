import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Prop {
	posts: Post[];
}

export default function News({ posts }: Prop) {
	return (
		<div>
			<Head>
				<title>345pi - news</title>
				<meta name="description" content="all posted 345pi news" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{posts.map((post: Post) => (
					<Link key={post._id} href={"news/" + post.slug.current}>
						<div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto text-center ease-in duration-300 transition-all">
							<h1 className="text-7xl font-bold">{post.title}</h1>
							<div className="">
								<Image
									alt={"Author's Profile Picture"}
									src={urlFor(post.author.image).url()!}
								></Image>
								{post.author.name}
							</div>
						</div>
					</Link>
				))}
			</main>
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
		_id,
		title,
		author -> {
			name, image
		},
		mainImage,
		slug,
	}`;
	const posts = await sanityClient.fetch(query);
	if (!posts) {
		return { notFound: true };
	} else {
		return {
			props: { posts },
		};
	}
};
