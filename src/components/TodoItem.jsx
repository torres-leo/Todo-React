import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/TodoItemCss.css';

const TodoItem = (props) => {
	return (
		<li className='TodoItem'>
			<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
				√
			</span>
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
			<span className='Icon Icon-delete' onClick={props.onDelete}>
				<FontAwesomeIcon icon={faCircleXmark} />
			</span>
		</li>
	);
};

export default TodoItem;
