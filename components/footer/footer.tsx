import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";

const socialLinks = [
	"https://www.linkedin.com/company/345pi/",
	"https://github.com/345piTeam/345pi.com",
];

const Footer = () => {
	const { resolvedTheme } = useTheme();

	interface Props {
		link: string;
	}
	const Social: React.FC<Props> = ({ link }) =>
		resolvedTheme === "light" ? (
			<SocialIcon
				url={link}
				className="hover:scale-105 duration-150 ease-in-out transform-gpu"
			/>
		) : (
			<SocialIcon
				url={link}
				className="hover:scale-105 duration-150 ease-in-out transform-gpu"
				bgColor="#eee"
			/>
		);

	return (
		<div className="flex flex-col gap-6 mt-20 justify-center h-48 items-center bg-gray-100 dark:bg-gray-800/75">
			<div className="flex flex-row"></div>
			<div className="flex flex-row gap-6">
				{socialLinks.map((link, i) => (
					<Social key={i} link={link} />
				))}
			</div>
			<div>
				<p>© 2022 345pi.com. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
