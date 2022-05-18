import React, { useState } from 'react';
import useApp from '../hooks/useApp';
import '../styles/FormularioCss.css';

const Formulario = () => {
	const { modal, setModal, addTodo } = useApp();
	const [newTask, setNewTask] = useState('');
	const [errorTask, setErrorTask] = useState(false);

	const handleCancelTask = (e) => {
		e.preventDefault();
		setModal(!modal);
	};

	const handleWriteTask = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmitTask = (e) => {
		e.preventDefault();
		if (newTask === '') {
			setErrorTask('No puedes agregar tareas vacias');
		} else {
			addTodo(newTask);
		}
		setModal(!modal);
	};

	return (
		<form onSubmit={handleSubmitTask}>
			<label htmlFor='tarea'>Agrega una Tarea por hacer</label>
			<textarea
				name='tarea'
				id='tarea'
				placeholder='Agrega una tarea que desees tener en lista'
				value={newTask}
				onChange={handleWriteTask}
			/>
			<div className='TodoForm-buttonContainer'>
				<button type='button' onClick={handleCancelTask} className='TodoForm-button TodoForm-button-cancel'>
					Cancelar
				</button>
				<button type='submit' className='TodoForm-button TodoForm-button-add'>
					Agregar
				</button>
			</div>
		</form>
	);
};

export default Formulario;
