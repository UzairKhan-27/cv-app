import { useState } from "react";
import "../styles/General.css";
/* eslint-disable react/prop-types */

function General({ submitStatus, className }) {
	const [inputs, setInputs] = useState({});

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	return (
		<>
			<div className={"general " + className}>
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
			</div>

			{submitStatus && (
				<>
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
