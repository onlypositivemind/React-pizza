import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AllPizzas from './pages/AllPizzas/AllPizzas';
import Basket from './pages/Basket/Basket';
import SinglePizza from './pages/SinglePizza/SinglePizza';
import NotFound from './pages/NotFound/NotFound';

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
