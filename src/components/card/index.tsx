import './style.scss';
import Modal from '../modal';
import { useState } from 'react';

type Card = {
	book: any;
	map: any;
};

const Card = ({ book }: any) => {
	console.log(book);
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();
	return (
		<>
			{book.map((item: any) => {
				const thumbnail: any =
					item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
				const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

				if (thumbnail != undefined && amount != undefined) {
					return (
						<>
							<div
								className="card"
								onClick={() => {
									setShow(true);
									setItem(item);
								}}
							>
								<img src={thumbnail} alt="" />
								<div className="bottom">
									<h3 className="title">{item.volumeInfo.title}</h3>
									<p className="amount">&#x20AC;{amount}</p>
								</div>
							</div>
							<Modal show={show} item={bookItem} onClose={() => setShow(false)} />
						</>
					);
				}
			})}
		</>
	);
};

export default Card;
