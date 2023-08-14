import './style.scss';

type Card = {
	book: any;
	map: any;
};

const Card = ({ book }: any) => {
	console.log(book);
	return (
		<>
			{book.map((item: any) => {
				const thumbnail: any =
					item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

				return (
					<>
						<div className="card">
							<img src={thumbnail} alt="" />
							<div className="bottom">
								<h3 className="title">React Js</h3>
								<p className="amount">&#36; 15.00</p>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export default Card;
