/* eslint-disable react/prop-types */
import { useState } from "react";

function Work({ submitStatus, className }) {
	const [workList, setWorkList] = useState([]);

	function handleChange(event, id) {
		const name = event.target.name;
		const value = event.target.value;
		setWorkList((prevList) =>
			prevList.map((list) =>
				list.id === id ? { ...list, [name]: value } : list,
			),
		);
	}

	function handleAddWork(event) {
		event.preventDefault();
		setWorkList((prevList) => [
			...prevList,
			{
				id: Date.now(),
				name: "",
				title: "",
				responsibility: "",
				start: "",
				end: "",
			},
		]);
	}

	function handleDelete(event, id) {
		setWorkList((prevList) => prevList.filter((list) => list.id !== id));
	}

	return (
		<>
			<div className={"education " + className}>
				<h1>Work Experience</h1>
				{workList.map((list) => (
					<div key={list.id} className="work-list">
						<label htmlFor="name">
							Company Name
							<input
								name="name"
								type="text"
								value={list.name || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>

						<label htmlFor="title">
							Job Title
							<input
								name="title"
								type="text"
								value={list.title || ""}
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
								value={list.end || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>

						<label htmlFor="responsibility">
							Responsibilities
							<textarea
								name="responsibility"
								type="textbox"
								value={list.responsibility || ""}
								onChange={(e) => handleChange(e, list.id)}
							/>
						</label>
						<button onClick={(e) => handleDelete(e, list.id)}>
							Delete
						</button>
					</div>
				))}
				<button onClick={handleAddWork}>Add Work</button>
			</div>
			{submitStatus && (
				<>
					<h2>Professional Experience</h2>
					{workList.map((list) => (
						<section className="education-item" key={list.id}>
							<ul>
								<li>{list.name}</li>
								<li>
									<em>{list.title}</em>
								</li>
								<li>{list.responsibility}</li>
								<li>{list.start + " - " + list.end}</li>
							</ul>
						</section>
					))}
				</>
			)}
		</>
	);
}
export { Work };
