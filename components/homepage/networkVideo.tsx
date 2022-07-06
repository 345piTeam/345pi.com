import videoLight from "/public/networkVideoLightCropped.gif";
import videoDark from "/public/networkVideoDarkCropped.gif";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const NetworkVideo = ({ flipped }: { flipped?: boolean }) => {
	const { resolvedTheme } = useTheme();
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref && ref.current && flipped) {
			ref.current.classList.add("[&>*]:rotate-180");
		}
	}, [flipped]);
	return (
		<div className="max-w-[450px] opacity-20 hidden lg:block" ref={ref}>
			{resolvedTheme === "light" ? (
				<Image src={videoLight} alt="" />
			) : (
				<Image src={videoDark} alt="" />
			)}
		</div>
	);
};

export default NetworkVideo;
