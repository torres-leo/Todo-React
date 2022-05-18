import React from 'react';
import '../styles/CreateTodoButtonCss.css';

const CreateTodoButton = ({ setModal }) => {
	const onClickButton = () => setModal(true);
	return (
		<>
			<button className='CreateTodoButton' onClick={onClickButton}>
				+
			</button>
		</>
	);
};

export default CreateTodoButton;
