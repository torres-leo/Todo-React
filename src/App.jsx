import React from 'react';
import AppUI from './AppUI';
import { AppProvider } from './context/AppProvider';

function App() {
	return (
		<AppProvider>
			<AppUI />
		</AppProvider>
	);
}

export default App;
