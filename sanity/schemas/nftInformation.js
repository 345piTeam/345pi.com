export default {
	name: "nft-information",
	title: "NFT Information",
	type: "document",
	fields: [
		{
			name: "title",
			title: "NFT Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "mainImage",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "body",
			title: "NFT Description",
			type: "blockContent",
		},
	],
};
