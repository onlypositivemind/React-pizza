import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { AllPizzas, Basket, SinglePizza, NotFound } from 'pages';

function App() {
	
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<AllPizzas />} />
				<Route path="basket" element={<Basket />} />
				<Route path="/pizza/:id" element={<SinglePizza />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
