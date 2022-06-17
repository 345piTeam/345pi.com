import Image from "next/image";
import hexagon from "../../public/homescreen-hexagon.png";

const TitleHexagon: React.FC = () => (
	<div className="relative [&>*]:absolute [&>*]:select-none text-white text-center mb-10">
		<Image
			className="left-0 top-0"
			alt="Title background image"
			src={hexagon}
			width={500}
			height={550}
			priority
		/>
		<div className="top-24 [&>*]:left-[50%] [&>*]-translate-x-[50%] w-[100%] flex flex-col items-center gap-10">
			<h1 className="top-20 text-8xl font-bold">345pi</h1>
			<h3 className="top-52 w-[100%] text-5xl">
				Learn Calculus.
				<br />
				Make a Friend.
			</h3>
			<h5 className="top-96 font-[100] text-2xl max-w-sm">
				Complete calculus games to earn cryptocurrency
			</h5>
		</div>
	</div>
);

export default TitleHexagon;
