interface Props {
	color: string;
	children?: React.ReactNode;
}

const Hexagon: React.FC<Props> = ({ color, children }) => {
	return (
		<div className="h-60">
			<svg className="mx-auto" viewBox="0 0 50 50"></svg>
		</div>
	);
};

export default Hexagon;
