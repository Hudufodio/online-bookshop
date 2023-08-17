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
				const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

				if (thumbnail != undefined && amount != undefined) {
					return (
						<>
							<div className="card">
								<img src={thumbnail} alt="" />
								<div className="bottom">
									<h3 className="title">{item.volumeInfo.title}</h3>
									<p className="amount">&#36;{amount}</p>
								</div>
							</div>
						</>
					);
				}
			})}
		</>
	);
};

export default Card;
