import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
			}}
			className="absolute right-1 top-2 text-3xl leading-6"
		>
			{resolvedTheme === "light" ? <h1>LIGHT</h1> : <h1>DARK</h1>}
		</button>
	);
};

export default ThemeToggle;
