interface Props {
	color: string;
	children?: React.ReactNode;
}

const Hexagon: React.FC<Props> = ({ color, children }) => {
	return (
		<div className="h-60">
			<svg className="mx-auto" viewBox="0 0 50 50">
				<polygon
					fill={color}
					points="50 1 95 25 95 75 50 99 5 75 5 25"
					onClick={() => console.log("You have clicked the polygon.")}
					className="cursor-pointer"
				>
					<text fill="black">test</text>
					<foreignObject>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui
							convallis, rutrum imperdiet eros. Aliquam erat volutpat.
						</div>
					</foreignObject>
				</polygon>
			</svg>
		</div>
	);
};

export default Hexagon;
