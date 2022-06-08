const plugin = require("tailwindcss/plugin");

module.exports = {
	darkMode: "media",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"345pi-logo-light": "url('/345pi_logo.png')",
				"345pi-logo-dark": "url('/345pi_logo_darkMode.png')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundImage: ["dark"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
