import { useState } from 'react';
import Card from '../card';
import './style.scss';
import bookbck from '../images/bookbck.jpg';
import axios from 'axios';

const Main = () => {
	const [search, setSearch] = useState('');
	const [bookData, setData] = useState([]);
	console.log(bookData);

	const searchBook = (event: any) => {
		if (event.key === 'Enter') {
			axios
				.get(
					'https://www.googleapis.com/books/v1/volumes?q=' +
						search +
						'&key=AIzaSyAbhasWbgXFuddygjO-HPwUkTa0yRjftwM' +
						'&maxResults=40'
				)
				.then((res) => setData(res.data.items))
				.catch((err) => console.log(err));
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
					<img src={bookbck} alt="" className="image" />
				</div>
			</div>
			<div className="container">{<Card book={bookData} />}</div>
		</>
	);
};

export default Main;
