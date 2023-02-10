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
		<div className="flex flex-col">
 				<div className="flex justify-evenly items-center -gap-6 lg:gap-0 text-center lg:flex-row-reverse flex-col lg:text-left  mt-32 lg:m-16">
					<div className="relative  w-72 md:w-[100%]">
						<Image
							alt="Title background image"
							src={hexagon}
							priority
						/>
					</div>
					<div className="flex flex-col gap-6 max-w-prose ">
						<h1 className=" md:px-6 text-[1.5rem] md:text-[3.2rem] text-black font-black md:font-bold dark:text-white ">
						Play <span className="lg:text-[5rem] font-bold">Calculus</span> Games for <span className="text-main-500">Cryptocurrency</span>
						</h1>
						<div className=" px-6 text-[1.2rem] text-black font-normal dark:text-white">
						345pi is a web3 calculus learning app which creates the decentralized social learning network.
						</div>
						<div className = "flex flex-col lg:flex-row items-center md:w-[60%]">
							<Link href="/demo">
								<div className = "m-2 flex-1 w-32 text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-700 text-center py-2 cursor-pointer border-b-4 border-main-800 hover:border-t-2 hover:border-b-0">Demo</div>
							</Link>
								<div className="m-2 flex-1 w-48 text-[1.2rem] md:text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-600 text-center py-2 cursor-pointer border-b-4 border-main-900 hover:border-t-2 hover:border-b-0">
									<a
										href="https://discord.gg/3UwWPeqE3F"
										target="_blank"
										rel="noreferrer"
										>
											Join Discord
										</a>

			</div>
						</div>
					</div>
 				</div>

		</div>

// 		<div className="relative text-white text-center items-center flex md:flex-1">
// 				<div className="lg:min-w-[550px] lg:w-[400px] relative w-[40%] md:w-[550px] md:h-[600px] mb-24 md:mb-0">
// 				<Image
// 					alt="Title background image"
// 					src={hexagon}
// 					priority
// 				/>
// 			</div>

// 			<div className="absolute top-20 w-full flex-col flex-row justify-between items-center text-left px-1 md:h-[400px]">
// 				<h1 className="w-[55%] text-[1.5rem] md:text-[3.2rem] text-black font-bold dark:text-white">
// 					Play <span className="text-[5rem] font-bold">Calculus</span> Games for <span className="text-main-500">Cryptocurrency</span>
// 				</h1>

// 				<div className="w-[85%] text-[1.5rem] md:text-[1.2rem] text-black font-light dark:text-white">
// 				345pi is a web3 calculus learning app which creates the decentralized social learning network.
// 				</div>
			
// </div>

// 			<div className="flex">
// 			<Link href="/demo">

// 				<div className = "m-6 ml-0 flex-1 w-48 text-[1.5rem] md:text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-700 text-center py-2 cursor-pointer border-b-4 border-main-800 hover:border-t-2 hover:border-b-0">Demo</div>
// 			</Link>
// 			<div className="m-6 flex-1 w-48 text-[1.5rem] md:text-[1.2rem] text-black font-bold bg-green rounded-full bg-main-600 text-center py-2 cursor-pointer border-b-4 border-main-900 hover:border-t-2 hover:border-b-0">
// 				<a
// 					href="https://discord.gg/3UwWPeqE3F"
// 					target="_blank"
// 					rel="noreferrer"
// 				>
// 						Join Discord
// 				</a>

// 			</div>
// 			</div>
// 		</div>
	);
};

export default TitleHexagon;
