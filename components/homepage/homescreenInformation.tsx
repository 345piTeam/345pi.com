import { FunctionComponent } from "react";
import { HomepageInformation } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import PortableText from "react-portable-text";

interface Props {
	info: HomepageInformation[];
}

const HomescreenInfo: FunctionComponent<Props> = ({ info }) => {
	return (
		<div className="flex flex-col">
			{info.map((cell, index) => {
				return (
					<div
						key={index}
						className={
							"flex justify-evenly items-center -gap-6 lg:gap-0 text-center " +
							(index % 2 === 0
								? "lg:flex-row flex-col lg:text-left"
								: "lg:flex-row-reverse flex-col lg:text-right")
						}
					>
						<div className="relative h-64 w-64 lg:w-[400px] lg:h-[400px]">
							<Image
								alt="Image"
								src={urlFor(cell.mainImage.asset).url()}
								layout={"fill"}
								objectFit={"cover"}
							/>
						</div>
						<div className="flex flex-col gap-6 p-5 max-w-prose">
							<h1 className="font-bold text-6xl">{cell.title}</h1>
							<PortableText className="text-2xl" content={cell.body} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HomescreenInfo;
