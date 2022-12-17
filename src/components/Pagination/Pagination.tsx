import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import s from './Pagination.module.scss';

const Pagination: React.FC = () => {
	const currentPage = useSelector((state: any) => state.filterSlice.currentPage);
	const dispatch = useDispatch();
	
	const changePageHandler = (i: number): void => {
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
		/>
	);
};

export default Pagination;