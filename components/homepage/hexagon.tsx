import Image from "next/image";
import hexagon from "/public/Hexagon.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

interface Props {
	contentRef?: any;
}

const TitleHexagon: React.FC<Props> = ({ contentRef }) => {
	const handleScroll = () => {
		if (contentRef && contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="relative text-white text-center items-center">
			<div className="lg:min-w-[550px] relative w-[90vw] md:w-[550px] h-[30em] md:h-[600px]">
				<Image
					alt="Title background image"
					src={hexagon}
					layout={"fill"}
					priority
				/>
			</div>
			<div className="absolute top-32 [&>*]:left-[50%] [&>*]-translate-x-[50%] w-[100%] flex flex-col justify-between items-center h-64 px-1 md:h-[400px]">
				<h1 className="w-[100%] text-4xl md:text-6xl">
					Learn Calculus.
					<br />
					Make a Friend.
				</h1>
				<h2 className="font-[100] text-2xl md:text-3xl max-w-md">
					Complete calculus games to earn cryptocurrency
				</h2>
				<button
					className="flex flex-col items-center opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
					onClick={() => handleScroll()}
				>
					<p>Learn More</p>
					<AiOutlineArrowDown className="m-1" />
				</button>
			</div>
			<div className="text-black dark:text-white text-xl absolute top-[450px] md:top-[550px] dark:bottom-[200px] flex flex-row justify-between w-full">
				<Link href="/demo">
					<div className="border-green-500 border-4 p-3 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out h-fit transform-gpu">
						Try the Demo
					</div>
				</Link>
				<a
					href="https://discord.gg/3UwWPeqE3F"
					target="_blank"
					rel="noreferrer"
				>
					<div className="border-green-500 border-4 p-3 rounded-full hover:scale-110 transition-all duration-200 ease-in-out transform-gpu">
						Join Discord
					</div>
				</a>
			</div>
		</div>
	);
};

export default TitleHexagon;
