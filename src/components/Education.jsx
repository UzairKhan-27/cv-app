/* eslint-disable react/prop-types */
import { useState } from "react";

function Education({ className, submitStatus }) {
	const [inputs, setInputs] = useState({});
	console.log(submitStatus);

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	function handleAddEducation(event) {
		event.preventDefault();
	}

	return (
		<>
			<div className={"education " + className}>
				<h1>Education</h1>
				<button onClick={handleAddEducation}>Add Education</button>
				<label htmlFor="name">
					Institution Name
					<input
						onChange={handleChange}
						required
						name="name"
						type="text"
						value={inputs.name || ""}
					/>
				</label>

				<label htmlFor="degree">
					Education Title
					<input
						onChange={handleChange}
						required
						name="degree"
						type="text"
						value={inputs.degree || ""}
					/>
				</label>

				<label htmlFor="start">
					Start Date
					<input
						onChange={handleChange}
						name="start"
						type="date"
						value={inputs.start || ""}
					/>
				</label>

				<label htmlFor="end">
					End Date
					<input
						onChange={handleChange}
						name="end"
						type="date"
						value={inputs.start || "Present"}
					/>
				</label>
			</div>
			{submitStatus && (
				<>
					<h3>{inputs.name}</h3>
					<h3>{inputs.degree}</h3>
					<h3>{inputs.start}</h3>
					<h3>{inputs.end}</h3>
				</>
			)}
		</>
	);
}
export { Education };
