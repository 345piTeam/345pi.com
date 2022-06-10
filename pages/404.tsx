import Link from "next/link";
import React from "react";
import type { NextPageWithLayout } from "./_app";
import { getLayout } from "../layouts/NotFoundLayout";
import Head from "next/head";

const NotFound: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>404 - Not Found</title>
			</Head>
			<div className="text-lg w-screen h-screen flex flex-col justify-center items-center">
				<h1 className="text-4xl font-bold">404 - Not Found</h1>
				<p>
					That&apos;s alright, you can always return to the{" "}
					<span className="underline">
						<Link href={"/"}>homepage</Link>
					</span>
				</p>
			</div>
		</>
	);
};

NotFound.getLayout = getLayout;

export default NotFound;
