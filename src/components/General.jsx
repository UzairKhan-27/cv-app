import { useState } from "react";
import "../styles/General.css";

function General() {
	const [submitStatus, setSubmitStatus] = useState(false);
	const [inputs, setInputs] = useState({});

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	function handleSubmitClick(event) {
		event.preventDefault();
		setSubmitStatus(true);
	}
	function handleEditClick() {
		setSubmitStatus(false);
	}

	return (
		<>
			<form className={submitStatus ? "hidden" : "personal-info"}>
				<h1>Personal Information</h1>
				<label htmlFor="name">
					Full Name
					<input
						onChange={handleChange}
						required
						name="name"
						type="text"
						value={inputs.name || ""}
					/>
				</label>
				<br />
				<label htmlFor="email">
					Email
					<input
						onChange={handleChange}
						required
						name="email"
						type="email"
						value={inputs.email || ""}
					/>
				</label>
				<br />
				<label htmlFor="contact">
					Contact Number
					<input
						onChange={handleChange}
						required
						name="contact"
						type="tel"
						value={inputs.contact || ""}
					/>
				</label>
				<br />
				<label htmlFor="city">
					City
					<input
						onChange={handleChange}
						required
						name="city"
						type="text"
						value={inputs.city || ""}
					/>
				</label>
				<br />
				<label htmlFor="country">
					Country
					<input
						onChange={handleChange}
						required
						name="country"
						type="text"
						value={inputs.country || ""}
					/>
				</label>
				<br />
				<button onClick={handleSubmitClick} type="submit">
					Submit
				</button>
			</form>
			{submitStatus && (
				<>
					<button onClick={handleEditClick}>Edit</button>
					<h3>{inputs.name}</h3>
					<h3>{inputs.age}</h3>
					<h3>{inputs.email}</h3>
					<h3>{inputs.city}</h3>
					<h3>{inputs.country}</h3>
				</>
			)}
		</>
	);
}

export { General };
