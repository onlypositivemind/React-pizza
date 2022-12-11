import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import AllPizzas from './pages/AllPizzas/AllPizzas';
import Basket from './pages/Basket/Basket';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const [searchValue, setSearchValue] = useState('');
	
	return (
		<Routes>
			<Route path="/" element={
				<Layout
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			}>
				<Route index element={<AllPizzas searchValue={searchValue} />} />
				<Route path="basket" element={<Basket />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
