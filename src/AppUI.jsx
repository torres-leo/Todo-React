import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import Modal from './components/Modal';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import useApp from './hooks/useApp';
import './styles/App.css';

function AppUI() {
	const { error, loading, searchedTodos, completeTodo, deleteTodo, modal, setModal } = useApp();

	return (
		<div className='container'>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Ha ocurrido un error ..</p>}
				{loading && <Spinner />}
				{!loading && !searchedTodos.length && <p className='nuevaTarea'>Agrega tu primer tarea! ;)</p>}
				{searchedTodos.map((item) => (
					<TodoItem
						key={item.text}
						text={item.text}
						completed={item.completed}
						onComplete={() => completeTodo(item.text)}
						onDelete={() => deleteTodo(item.text)}
					/>
				))}
			</TodoList>

			{!!modal && (
				<Modal>
					<Formulario />
				</Modal>
			)}

			<CreateTodoButton setModal={setModal} />
		</div>
	);
}

export default AppUI;
