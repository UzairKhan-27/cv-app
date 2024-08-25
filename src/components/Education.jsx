import { useState } from "react";

function Education(submitStatus) {
	const [inputs, setInputs] = useState({});

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	return (
		<>
			<form className={submitStatus ? "hidden" : "personal-info"}>
				<h1>Personal</h1>
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
			</form>
		</>
	);
}
export { Education };
