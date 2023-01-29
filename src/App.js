import { useState } from "react";
import QuestionList from "./components/question-list";
import questions from "./service/api";

const App = () => {
	const [data, setData] = useState(questions);

	return (
		<main className="w-100 h-100 bg-primary p-5">
			<div className="w-75 h-75 bg-light d-flex align-items-center mx-auto rounded p-5 gap-3">
				<div className=" w-25 text-center ">
					<h1>All question and responces for login !</h1>
				</div>
				<div className="w-75 border-start border-4 px-3">
					{data.map((item) => {
						return <QuestionList key={item.id} {...item} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default App;
