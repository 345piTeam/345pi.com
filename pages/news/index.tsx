/* eslint-disable @next/next/no-img-element */
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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5">
					{posts.map((post: Post) => {
						return (
							<Link key={post._id} href={"news/" + post.slug.current}>
								<div className="max-w-xl cursor-pointer m-2 rounded-md group drop-shadow-lg dark:drop-shadow-none overflow-hidden bg-white dark:bg-slate-800">
									<div className="">
										<img
											className="w-full object-cover h-40 group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-150 ease-in-out"
											alt={"Main Article Image"}
											src={urlFor(post.mainImage).url()}
										/>
									</div>
									<div className="flex align-center p-1">
										<div className="rounded-full m-1">
											<Image
												alt={"Author's Profile Picture"}
												src={urlFor(post.author.image).url()!}
												width={50}
												height={50}
											/>
										</div>
										<div className="flex flex-col ml-2 mt-1">
											<h1 className="text-xl font-bold">{post.title}</h1>
											<h3 className="font-light">
												<>
													Written by {post.author.name} on{" "}
													{post._createdAt.replace("Z", "").replace("T", " ")}
												</>
											</h3>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
		_id,
		_createdAt,
		title,
		author -> {
			name, 
			image,
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
