import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuestionList = ({ title, description }) => {
	const [show, setShow] = useState(false);

	const ShowInfo = () => {
		setShow((show) => !show);
	};

	return (
		<div className="d-flex w-100 flex-column justify-content-between mt-3">
			<div className="d-flex justify-content-between">
				<h2>{title}</h2>

				<button className="btn btn-primary" onClick={ShowInfo}>
					{show ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			<p className="fs-3">{show && description}</p>
		</div>
	);
};

export default QuestionList;
