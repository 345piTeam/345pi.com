const concurrently = require("concurrently");
const path = require("path");

const { result } = concurrently(
	[
		{
			command: "yarn sanity start",
			name: "Sanity Studio server",
			cwd: path.resolve(__dirname, "sanity"),
		},
		{
			command: "next dev",
			name: "Web server",
		},
	],
	{
		prefix: "name",
		killOthers: ["failure", "success"],
		restartTries: 3,
	}
);
result.then(success, failure);

function success() {
	console.log("Closed servers");
}

function failure() {
	console.log("Failure closing servers");
}
