import './style.scss';
const Card = () => {
	return (
		<>
			<div className="card">
				<img src="./images/book1.jpeg" alt="" />
				<div className="bottom">
					<h3 className="title">React JS</h3>
					<p className="amount">&#36; 15.00</p>
				</div>
			</div>
		</>
	);
};

export default Card;
