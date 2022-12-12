import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import s from './Pagination.module.scss';

const Pagination = () => {
	const currentPage = useSelector((state) => state.filterSlice.currentPage);
	const dispatch = useDispatch();
	
	const changePageHandler = (i) => {
		dispatch(setCurrentPage(i));
	};
	
	return (
		<ReactPaginate
			className={s.content}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => changePageHandler(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			forcePage={currentPage - 1}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;