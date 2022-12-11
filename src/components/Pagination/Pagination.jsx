import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

const Pagination = ({ changePageHandler }) => {
	
	return (
		<ReactPaginate
			className={s.content}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => changePageHandler(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;