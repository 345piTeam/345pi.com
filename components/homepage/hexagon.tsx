import Image from "next/image";
import hexagon from "/public/Hexagon.svg";

const TitleHexagon: React.FC = () => (
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
		<div className="absolute top-24 [&>*]:left-[50%] [&>*]-translate-x-[50%] w-[100%] flex flex-col justify-evenly items-center gap-4 h-64 px-2 sm:h-96">
			<h1 className="w-[100%] text-5xl sm:text-6xl">
				Learn Calculus.
				<br />
				Make a Friend.
			</h1>
			<h2 className="font-[100] text-3xl max-w-md">
				Complete calculus games to earn cryptocurrency
			</h2>
		</div>
	</div>
);

export default TitleHexagon;
