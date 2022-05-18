import React from 'react';
import '../styles/TodoListCss.css';

const TodoList = (props) => {
	return (
		<section>
			<ul>{props.children}</ul>
		</section>
	);
};

export default TodoList;
