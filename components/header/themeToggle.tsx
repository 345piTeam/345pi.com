import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";

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
			className="fixed right-2 sm:right-4 xl:right-6 top-2 text-3xl leading-6"
		>
			{resolvedTheme === "light" ? (
				<SunIcon className="h-6 w-6 hover:h-7 hover:w-7 transition-all duration-200 ease-in-out" />
			) : (
				<MoonIcon className="h-5 w-5 hover:h-6 hover:w-6 transition-all duration-200 ease-in-out" />
			)}
		</button>
	);
};

export default ThemeToggle;
