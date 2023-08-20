import './style.scss';
import book1 from '../images/book1.jpeg';

const Modal = () => {
	return (
		<>
			<div className="overlay">
				<div className="overlay-inner">
					<button className="close">
						<i className="fa-solid fa-xmark"></i>
					</button>
					<div className="inner-box">
						<img src={book1} alt="book cover" />
						<div className="info">
							<h1>Build modern web applications with React and Typescript</h1>
							<h3>H.Fodio</h3>
							<h4>
								XX Publish Ltd <span>2023</span>
							</h4>
							<br />
							<a href="#">
								<button>More</button>
							</a>
						</div>
					</div>
					<h4 className="description">Read any book online and Learn a new skill.</h4>
				</div>
			</div>
		</>
	);
};

export default Modal;
