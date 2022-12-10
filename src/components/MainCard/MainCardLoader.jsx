import ContentLoader from 'react-content-loader';

const MainCardLoader = () => {
	return (
		<ContentLoader
			speed={1}
			width={280}
			height={450}
			viewBox="0 0 280 450"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="1115" rx="2" ry="2" width="170" height="15" />
			<rect x="0" y="260" rx="5" ry="5" width="280" height="25" />
			<circle cx="140" cy="125" r="120" />
			<rect x="0" y="300" rx="7" ry="7" width="280" height="80" />
			<rect x="0" y="400" rx="4" ry="4" width="90" height="40" />
			<rect x="130" y="400" rx="4" ry="4" width="150" height="40" />
		</ContentLoader>
	);
};

export default MainCardLoader;