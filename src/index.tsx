import React from 'react';
import ReactDOM from 'react-dom/client';

import { Main } from './components';

const Hero = () => {
	return (
		<>
			<Main />
		</>
	);
};

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);
	root.render(
		<React.StrictMode>
			<Hero />
		</React.StrictMode>
	);
}
