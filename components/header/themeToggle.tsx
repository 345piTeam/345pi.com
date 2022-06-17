import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	// Used to delay returning until component has been mounted. This is necessary for SSR to work properly with a theme switcher.
	if (!mounted) return null;

	return (
		<button
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
			}}
			className="fixed right-1 top-2 text-3xl leading-6"
		>
			{resolvedTheme === "light" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 hover:h-7 hover:w-7 transition-all duration-200 ease-in-out"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 hover:h-6 hover:w-6 transition-all duration-200 ease-in-out"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
