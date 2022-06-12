/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import hexagon from "../public/hexagon-homescreen-with-text.png";

interface Props {
	color?: string;
	children?: React.ReactNode;
}

const TitleHexagon: React.FC<Props> = ({ color, children }) => {
	return (
		<div className="relative children:absolute text-white text-center">
			<Image
				className="left-0 top-0"
				alt="Title background image"
				src={hexagon}
				width={500}
				height={550}
			/>
			<h1 className="top-20 left-[50%] -translate-x-[50%] text-8xl font-bold">
				345pi
			</h1>
			<h3 className="top-52 left-[50%] -translate-x-[50%] w-[100%] text-5xl">
				Learn Calculus.
				<br />
				Make a Friend.
			</h3>
		</div>
	);
};

export default TitleHexagon;
