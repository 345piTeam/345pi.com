import Image from "next/image";
import hexagon from "/public/345top.svg";
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

			<div className="top-20 lg:min-w-[550px] left-[50%] relative w-[90vw] md:w-[550px] h-[30em] md:h-[600px] mb-24 md:mb-0">
				<Image
					alt="Title background image"
					src={hexagon}
					// layout={"fill"}
					priority
				/>
			</div>
			<div className="absolute top-20 w-full left-[-50%] flex flex-col justify-between items-center text-left px-1 md:h-[400px]">
				<h1 className="w-[85%] text-[1.5rem] md:text-[3.2rem] text-black font-bold dark:text-white">
					Play <span className="text-[5rem] font-bold">Calculus</span> Games for <span className="text-main-500">Cryptocurrency</span>
				</h1>

				<div className="w-[85%] text-[1.5rem] md:text-[1.2rem] text-black font-light dark:text-white">
				345pi is a web3 calculus learning app which creates the decentralized social learning network.
				</div>
			
			<div className="flex">
			<Link href="/demo">
				{/* <div className="absolute top-[19rem] md:top-[26rem] -translate-x-[50%] bg-white text-md md:text-xl text-black dark:text-white dark:bg-slate-800 p-3 border-slate-800 border-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out h-fit transform-gpu">
					Demo
				</div> */}
				<div className = "m-6 ml-0 flex-1 w-48 text-[1.5rem] md:text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-700 text-center py-2 cursor-pointer border-b-4 border-main-800 hover:border-t-2 hover:border-b-0">Demo</div>
			</Link>
			<div className="m-6 flex-1 w-48 text-[1.5rem] md:text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-600 text-center py-2 cursor-pointer border-b-4 border-main-900 hover:border-t-2 hover:border-b-0">
				<a
					href="https://discord.gg/3UwWPeqE3F"
					target="_blank"
					rel="noreferrer"
				>
					{/* <div className="text-[1.5rem] md:text-[1.2rem] rounded-full"> */}
						Join Discord
					{/* </div> */}
				</a>

				{/* <div
					className="border-green-500 border-4 p-3 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out h-fit transform-gpu"
					onClick={() => handleScroll()}
				>
					Learn More <AiOutlineArrowDown className="inline" />
				</div> */}
			</div>
			</div>
			</div>
		</div>
	);
};

export default TitleHexagon;
