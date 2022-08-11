import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";

const socialLinks = [
	{ network: "linkedin", href: "http://www.linkedin.com/company/345pi/" },
	{ network: "github", href: "https://github.com/345piTeam/345pi.net" },
	{ network: "discord", href: "https://discord.gg/MTUsuEDqMV" },
	{ network: "email", href: "mailto:info@345pi.com" },
];

const Footer = () => {
	const { resolvedTheme } = useTheme();

	const Social = ({ link }: { link: typeof socialLinks[0] }) =>
		resolvedTheme === "light" ? (
			<SocialIcon
				url={link.href}
				className="hover:scale-105 duration-150 ease-in-out transform-gpu"
				network={link.network}
			/>
		) : (
			<SocialIcon
				url={link.href}
				className="hover:scale-105 duration-150 ease-in-out transform-gpu"
				network={link.network}
				bgColor="#eee"
			/>
		);

	return (
		<footer className="flex flex-col gap-6 mt-20 justify-center h-32 pb-4 items-center bg-gray-100 dark:bg-gray-800/75">
			<div className="flex flex-row"></div>
			<div className="flex flex-row gap-6">
				{socialLinks.map((link, i) => (
					<Social key={i} link={link} />
				))}
			</div>
			<div>
				<p>© 2022 345pi.net. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
