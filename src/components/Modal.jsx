import React from 'react';
import ReactDOM from 'react-dom';
import useApp from '../hooks/useApp';
import '../styles/ModalCss.css';

const Modal = ({ children }) => {
	const { modal, setModal } = useApp();

	const closeModal = () => setModal(!modal);

	return ReactDOM.createPortal(
		<div>
			<div className='ModalBackground'>{children}</div>
			<button className='close' onClick={closeModal}>
				X
			</button>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
