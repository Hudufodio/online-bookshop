import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header, Hero, Card, Modal } from './components';

const Main = () => {
	return (
		<main>
			<Header />
			<Hero />
			<Card />
			<Modal />
		</main>
	);
};

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);
	root.render(
		<React.StrictMode>
			<Main />
		</React.StrictMode>
	);
}
