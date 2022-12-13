import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import SearchSVG from '../../shared/images/icons/search.svg';
import ClearSVG from '../../shared/images/icons/clear.svg';
import s from './SearchInput.module.scss';

const SearchInput = ({ setSearchValue }) => {
	const [localValue, setLocalValue] = useState('');
	const inputSearchRef = useRef();
	const location = useLocation();
	
	const inputClearHandler = () => {
		setSearchValue('');
		setLocalValue('');
		inputSearchRef.current.focus();
	};
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValue(str);
		}, 300),
		[]
	);
	
	const inputChangeHandler = (event) => {
		setLocalValue(event.target.value);
		updateSearchValue(event.target.value);
	};
	
	return (
		<div
			className={location.pathname === '/' ? s.searchBlock : `${s.searchBlock} ${s.hidden}`}
		>
			<img src={SearchSVG} className={s.searchIcon} alt="Search" />
			<input
				ref={inputSearchRef}
				value={localValue}
				onChange={inputChangeHandler}
				type="text"
				placeholder="Поиск пицц..."
			/>
			{
				localValue &&
				<img
					onClick={inputClearHandler}
					src={ClearSVG}
					className={s.clearIcon}
					alt="Clear" />
			}
		</div>
	);
};

export default SearchInput;