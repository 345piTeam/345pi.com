export default {
	name: "demo",
	title: "Demo",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Demo Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "title",
			title: "Image Name",
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
			name: "body",
			title: "Description",
			type: "blockContent",
		},
	],
};
