import { useState } from "react";
import "./App.css";
import "./styles/Common.css";
import { Education } from "./components/Education";
import { Work } from "./components/Work";
import { General } from "./components/General";

function App() {
	const [submitStatus, setSubmitStatus] = useState(false);

	function handleSubmitClick(event) {
		event.preventDefault();
		setSubmitStatus(true);
	}

	function handleEditClick() {
		setSubmitStatus(false);
	}

	return (
		<>
			<form className="form-container">
				<General
					className={submitStatus ? "hidden" : ""}
					submitStatus={submitStatus}
				/>

				<Education
					className={submitStatus ? "hidden" : ""}
					submitStatus={submitStatus}
				/>

				<Work
					className={submitStatus ? "hidden" : ""}
					submitStatus={submitStatus}
				/>

				<button onClick={handleSubmitClick} type="submit">
					Submit
				</button>
			</form>

			{submitStatus && (
				<button onClick={handleEditClick} type="submit">
					Edit
				</button>
			)}
		</>
	);
}

export default App;
