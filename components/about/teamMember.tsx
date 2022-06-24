import { DarkLord } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import placeholderAvatar from "/public/placeholder-avatar.png";

interface Props {
	data: DarkLord;
}

const TeamMember: React.FC<Props> = ({ data }) => {
	const imageSize = 250;
	return (
		<div className="flex flex-col items-center basis-1/3">
			<div className="relative w-64 h-64 rounded-full overflow-hidden">
				{data.image ? (
					<Image
						alt="Dark Lord Profile Image"
						src={urlFor(data.image).url()}
						layout={"fill"}
						objectFit={"cover"}
					/>
				) : (
					<Image
						alt="Placeholder"
						src={placeholderAvatar}
						layout={"fill"}
						objectFit={"cover"}
					/>
				)}
			</div>
			<h1 className="font-bold text-center">{data.name}</h1>
		</div>
	);
};

export default TeamMember;
