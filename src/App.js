import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AllPizzas from './pages/AllPizzas/AllPizzas';
import Basket from './pages/Basket/Basket';
import NotFound from './pages/NotFound/NotFound';
import axios from 'axios';

const mainURL = 'https://639487884df9248eada4f54f.mockapi.io';
const allPizzasURL = `${mainURL}/all-pizzas`;

function App() {
	const [pizzasDate, setPizzasDate] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(allPizzasURL);
				setPizzasDate(data);
			} catch (error) {
				alert('Не удалось загрузить данные');
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={
					<AllPizzas
						pizzasDate={pizzasDate}
						isLoading={isLoading}
					/>}
				/>
				<Route path="basket" element={<Basket />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
