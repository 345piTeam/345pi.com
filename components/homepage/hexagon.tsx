import Image from "next/image";
import hexagon from "../../public/homescreen-hexagon.png";

const TitleHexagon: React.FC = () => (
	<div className="relative [&>*]:absolute [&>*]:select-none text-white text-center items-center">
		<Image
			alt="Title background image"
			src={hexagon}
			width={500}
			height={550}
			priority
		/>
		<div className="top-24 [&>*]:left-[50%] [&>*]-translate-x-[50%] w-[100%] flex flex-col items-center gap-4 sm:gap-10">
			<h1 className="text-8xl font-bold">345pi</h1>
			<h3 className="w-[100%] text-5xl">
				Learn Calculus.
				<br />
				Make a Friend.
			</h3>
			<h5 className="font-[100] text-xl max-w-sm">
				Complete calculus games to earn cryptocurrency
			</h5>
		</div>
	</div>
);

export default TitleHexagon;
