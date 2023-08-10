import { useState } from 'react';
import Modal from '../modal';

interface cardTypes {
	book: any;
	item: any;
}

const Card = ({ book }: any) => {
	const [show, setShow] = useState('');
	const [bookItem, setBookItem] = useState();

	return (
		<>
			{book.map((item: any) => {
				let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
				let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
				if (thumbnail !== undefined && amount !== undefined) {
					return (
						<>
							<div
								className="card"
								onClick={() => {
									setShow('true');
									setBookItem(item);
								}}
							>
								<img src={thumbnail} alt="" />
								<div className="bottom">
									<h3 className="title">{item.volumeInfo.title}</h3>
									<p className="amount">&#8377;{amount}</p>
								</div>
							</div>
							<Modal show={show} item={bookItem} onclose={() => setShow('false')} />
						</>
					);
				}
			})}
		</>
	);
};

export default Card;
