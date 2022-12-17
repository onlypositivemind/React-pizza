import React from 'react';
import ContentLoader from 'react-content-loader';

const SinglePizzaLoader: React.FC = () => (
	<ContentLoader
		speed={1}
		width={800}
		height={385}
		viewBox="0 0 800 385"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="1115" rx="2" ry="2" width="170" height="15" />
		<rect x="310" y="35" rx="7" ry="7" width="500" height="160" />
		<rect x="0" y="400" rx="4" ry="4" width="90" height="40" />
		<rect x="130" y="400" rx="4" ry="4" width="150" height="40" />
		<circle cx="140" cy="120" r="120" />
		<rect x="295" y="330" rx="30" ry="30" width="210" height="55" />
	</ContentLoader>
);

export default SinglePizzaLoader;