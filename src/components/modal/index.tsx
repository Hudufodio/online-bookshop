import './style.scss';

const Modal = ({ show, item, onClose }: any) => {
	if (!show) {
		return null;
	}

	const thumbnail: any = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
	return (
		<>
			<div className="overlay">
				<div className="overlay-inner">
					<button className="close" onClick={onClose}>
						<i className="fa-solid fa-xmark"></i>
					</button>
					<div className="inner-box">
						<img src={thumbnail} alt="book cover" />
						<div className="info">
							<h1>{item.volumeInfo.title}</h1>
							<h3>{item.volumeInfo.authors}</h3>
							<h4>
								{item.volumeInfo.publisher}
								<span>{item.volumeInfo.publishedDate}</span>
							</h4>
							<br />
							<a href={item.volumeInfo.previewLink}>
								<button>More</button>
							</a>
						</div>
					</div>
					<h4 className="description">{item.volumeInfo.description}</h4>
				</div>
			</div>
		</>
	);
};

export default Modal;
