export default {
	name: "whitepaper",
	title: "Whitepaper",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			description:"Keep the title short!",
			type: "string",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};
