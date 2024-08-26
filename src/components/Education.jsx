/* eslint-disable react/prop-types */
import { useState } from "react";

function Education({ className, submitStatus }) {
	const [educationList, setEducationList] = useState([]);
	function handleChange(event, id) {
		console.log(id);
		console.log(educationList);
		const name = event.target.name;
		const value = event.target.value;
		console.log(value);
		setEducationList((prevList) =>
			prevList.map((list) =>
				list.id === id ? { ...list, [name]: value } : list,
			),
		);
	}

	function handleAddEducation(event) {
		event.preventDefault();
		setEducationList((prevList) => [
			...prevList,
			{
				id: Date.now(),
				name: "",
				degree: "",
				start: "",
				end: "",
			},
		]);
	}

	function handleDelete(event, id) {
		event.preventDefault();
		setEducationList((prevList) =>
			prevList.filter((list) => list.id !== id),
		);
	}

	return (
		<>
			<div className={"education " + className}>
				<h1>Education</h1>
				{educationList.map((list) => (
					<div key={list.id} className="education-list">
						<label htmlFor="name">
							Institution Name
							<input
								required
								name="name"
								type="text"
								value={list.name || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>

						<label htmlFor="degree">
							Education Title
							<input
								required
								name="degree"
								type="text"
								value={list.degree || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>

						<label htmlFor="start">
							Start Date
							<input
								name="start"
								type="date"
								value={list.start || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>

						<label htmlFor="end">
							End Date
							<input
								name="end"
								type="date"
								value={list.end || "Present"}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>
						<button onClick={(e) => handleDelete(e, list.id)}>
							Delete
						</button>
					</div>
				))}
				<button onClick={handleAddEducation}>Add Education</button>
			</div>

			{submitStatus && (
				<>
					{educationList.map((list) => (
						<div key={list.id}>
							<h3>{list.name}</h3>
							<h3>{list.degree}</h3>
							<h3>{list.start}</h3>
							<h3>{list.end}</h3>
						</div>
					))}
				</>
			)}
		</>
	);
}
export { Education };
