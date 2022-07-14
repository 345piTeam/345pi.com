import Image from "next/image";
import hexagon from "/public/Hexagon.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

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
			<div className="lg:min-w-[550px]">
				<Image
					alt="Title background image"
					src={hexagon}
					width={550}
					height={600}
					priority
				/>
			</div>
			<div className="absolute top-28 sm:top-32 [&>*]:left-[50%] [&>*]-translate-x-[50%] w-[100%] flex flex-col justify-between items-center h-64 px-2 sm:h-[400px]">
				<h1 className="w-[100%] text-5xl sm:text-6xl">
					Learn Calculus.
					<br />
					Make a Friend.
				</h1>
				<h2 className="font-[100] text-2xl sm:text-3xl max-w-md">
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
		</div>
	);
};

export default TitleHexagon;
