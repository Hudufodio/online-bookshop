import './style.scss';

const Modal = () => {
	return (
		<>
			<div className="overlay">
				<div className="overlay-inner">
					<button className="close">
						<i className="fa-solid fa-xmark"></i>
					</button>
					<div className="inner-box">
						<div className="info">
							<h1>Build modern web applications with React and Typescript</h1>
							<h3>H.Fodio</h3>
							<br />
							<h4>
								XX Publish Ltd <span>2023</span>
							</h4>
							<br />
							<a href="#">
								<button>More</button>
							</a>
						</div>
					</div>
					<h4 className="description">Read and Learn any kind of book you desire. </h4>
				</div>
			</div>
		</>
	);
};

export default Modal;
