/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				main: {
					400: "#2D8044",
					500: "#3AA859",
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ["dark"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
