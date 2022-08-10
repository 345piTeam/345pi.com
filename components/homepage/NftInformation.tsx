import { NftData } from "../../typings";
import Image from "next/image";
import { urlFor } from "../../sanity";
import PortableText from "react-portable-text";

interface Props {
	nftData: NftData;
}
const NftInformation: React.FC<Props> = ({ nftData }) => {
	return (
		<div className="basis-1/3 flex flex-col items-center">
			<div className="relative w-64 h-64">
				<Image
					alt="NFT Image"
					src={urlFor(nftData.image).url()}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<h3 className="font-bold text-xl">{nftData.title}</h3>
			<PortableText content={nftData.body} className="mx-10 text-sm" />
		</div>
	);
};

export default NftInformation;
