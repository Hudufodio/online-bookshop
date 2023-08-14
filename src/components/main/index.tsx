import { useState } from 'react';
import Card from '../card';
import './style.scss';

const Main = () => {
	const [search, setSearch] = useState('');

	const searchBook = (event: any) => {
		if (event.key === 'Enter') {
			//googleapi key will go here
		}
	};

	return (
		<>
			<div className="header">
				<div className="row1">
					<h1>
						Read a book to broaden your choice <br /> of words and decision making.
					</h1>
				</div>
				<div className="row2">
					<h2>Find Your Book</h2>
					<div className="search">
						<input
							type="text"
							className="input"
							placeholder="Enter Your Book Name"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							onKeyUp={searchBook}
						/>
						<button>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
					<img src="./images/bookbck.jpg" alt="" className="image" />
				</div>
			</div>
			<div className="container">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

export default Main;
