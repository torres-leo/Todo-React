import React, { useState } from 'react';
import useApp from '../hooks/useApp';
import '../styles/TodoSearchCss.css';

const TodoSearch = () => {
	const { inputFindTask, setInputFindTask } = useApp();

	const onSearchValueChange = (e) => {
		setInputFindTask(e.target.value);
	};

	return (
		<>
			<input
				className='TodoSearch'
				placeholder='Busca una tarea'
				value={inputFindTask}
				onChange={onSearchValueChange}
			/>
		</>
	);
};

export default TodoSearch;
