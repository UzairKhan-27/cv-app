import { useState } from "react";

function General() {
	const [submitStatus, setSubmitStatus] = useState(0);

	function handleSubmitClick(event) {
		event.preventDefault();
		console.log("here");
		setSubmitStatus(submitStatus + 1);
	}

	return (
		<>
			<h1>Personal Information</h1>
			<form>
				<label htmlFor="name">
					Full Name
					<input
						onChange={handleSubmitClick}
						required
						name="name"
						type="text"
					/>
				</label>
				<br />
				<label htmlFor="email">
					Email
					<input required name="email" type="email" />
				</label>
				<br />
				<label htmlFor="contact">
					Contact Number
					<input required name="contact" type="tel" />
				</label>
				<br />
				<label htmlFor="city">
					City
					<input required name="city" type="text" />
				</label>
				<br />
				<label htmlFor="country">
					Country
					<input required name="country" type="text" />
				</label>
				<br />
				<button onClick={handleSubmitClick} type="submit">
					Submit
				</button>
			</form>
			<h3>{submitStatus}</h3>
		</>
	);
}

export { General };
