import { DarkLord } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import placeholderAvatar from "/public/placeholder-avatar.png";

interface Props {
	data: DarkLord;
}

const TeamMember: React.FC<Props> = ({ data }) => {
	return (
		<div className="flex flex-col items-center">
			<div>
				{data.image ? (
					<Image
						alt="Dark Lord Profile Image"
						src={urlFor(data.image).url()}
						width="250"
						height="250"
					/>
				) : (
					<Image
						alt="Placeholder"
						src={placeholderAvatar}
						width="250"
						height="250"
					/>
				)}
			</div>
			<h1 className="font-bold text-center">{data.name}</h1>
		</div>
	);
};

export default TeamMember;
