import videoLight from "/public/networkVideoLightCropped.gif";
import videoDark from "/public/networkVideoDarkCropped.gif";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface Props {
	className?: string;
	flipped?: boolean;
}

const NetworkVideo: React.FC<Props> = ({ flipped, className }) => {
	const { resolvedTheme } = useTheme();
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref && ref.current && flipped) {
			ref.current.classList.add("[&>*]:rotate-180");
		}
	}, [flipped]);
	return (
		<div ref={ref} className={className}>
			{resolvedTheme === "light" ? (
				<Image src={videoLight} alt="" />
			) : (
				<Image src={videoDark} alt="" />
			)}
		</div>
	);
};

export default NetworkVideo;
