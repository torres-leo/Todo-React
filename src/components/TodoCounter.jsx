import React from 'react';
import useApp from '../hooks/useApp';
import '../styles/TodoCounterCss.css';

const TodoCounter = () => {
	const { totalTodos, completedTodos } = useApp();

	return (
		<h2 className='TodoCounter'>
			Has completado "{completedTodos}" de "{totalTodos}" Tareas
		</h2>
	);
};

export default TodoCounter;
