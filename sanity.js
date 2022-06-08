import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_ID,
	apiVersion: "2021-10-21",
	useCdn: process.env.NODE_ENV === "production",
};

const builder = createImageUrlBuilder(config);

export const sanityClient = createClient(config);

export const urlFor = (source) => builder.image(source);

export const user = createCurrentUserHook(config);
