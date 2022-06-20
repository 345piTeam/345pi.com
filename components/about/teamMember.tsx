import { DarkLord } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

interface Props {
	data: DarkLord;
}

const TeamMember: React.FC<Props> = ({ data }) => {
	return (
		<div className="relative [&>*]:absolute">
			<h1 className="-bottom-4 left-[50%] -translate-x-[50%]">{data.name}</h1>
			<Image
				alt="Dark Lord Profile Image"
				src={urlFor(data.image).url()}
				width="300"
				height="300"
			/>
		</div>
	);
};

export default TeamMember;
