const concurrently = require("concurrently");
const path = require("path");

const { result } = concurrently(
	[
		{
			command: "sanity start",
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
	console.log("Started servers");
}

function failure() {
	console.log("Failure");
}
