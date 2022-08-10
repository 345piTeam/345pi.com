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
			<div className="lg:min-w-[550px] relative w-[90vw] md:w-[550px] h-[30em] md:h-[600px] mb-24 md:mb-0">
				<Image
					alt="Title background image"
					src={hexagon}
					layout={"fill"}
					priority
				/>
			</div>
			<div className="absolute top-44 w-full flex flex-col justify-between items-center px-1 md:h-[400px]">
				<h1 className="w-[85%] text-[1.5rem] md:text-[2.8rem]">
					Complete Calculus Games to Earn Cryptocurrency
				</h1>
			</div>
			<Link href="/demo">
				<div className="absolute top-[19rem] md:top-[26rem] left-[50%] -translate-x-[50%] bg-white text-md md:text-xl text-black dark:text-white dark:bg-slate-800 p-3 border-slate-800 border-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out h-fit transform-gpu">
					Try the Demo
				</div>
			</Link>
			<div className="text-black dark:text-white text-xl absolute top-[450px] md:top-[550px] dark:bottom-[200px] flex flex-row justify-between w-full">
				<a
					href="https://discord.gg/3UwWPeqE3F"
					target="_blank"
					rel="noreferrer"
				>
					<div className="border-green-500 border-4 p-3 rounded-full hover:scale-110 transition-all duration-200 ease-in-out transform-gpu">
						Join Discord
					</div>
				</a>

				<div
					className="border-green-500 border-4 p-3 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out h-fit transform-gpu"
					onClick={() => handleScroll()}
				>
					Learn More <AiOutlineArrowDown className="inline" />
				</div>
			</div>
		</div>
	);
};

export default TitleHexagon;
