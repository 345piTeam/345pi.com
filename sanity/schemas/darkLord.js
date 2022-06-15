export default {
	name: "darkLord",
	title: "Dark Lord",
	type: "document",
	fields: [
		{
			name: "realName",
			title: "Real Name",
			description: "First and Last",
			type: "string",
		},
		{
			name: "userName",
			title: "User Name",
			description: "Same as your ENS name, if applicable",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "realName",
				maxLength: 96,
			},
		},
		{
			name: "profileImage",
			title: "Profile Image",
			description: "Image of your face",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "characterImage",
			title: "Character Image",
			description: "Image of your NFT",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Bio",
			description: "Your Dark Lord's description. Keep it relatively short!",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};
