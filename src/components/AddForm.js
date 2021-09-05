import React, { useState } from "react";
import { Button, Checkbox, Form, Grid, Header } from "semantic-ui-react";

const AddForm = ({ handleSubmit }) => {
	const [fillForm, setFillForm] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: "",
		"highest medal achieved": "",
		image: "",
	});
	function handleForm(e) {
		const name = e.target.name;
		const value =
			e.target.name === "greased" ? e.target.checked : e.target.value;
		setFillForm({ ...fillForm, [name]: value });
	}
	function handleLocalSubmit(e) {
		e.preventDefault();
		handleSubmit(fillForm);
		setFillForm({
			name: "",
			specialty: "",
			greased: false,
			weight: "",
			"highest medal achieved": "",
			image: "",
		});
	}
	return (
		<Grid centered columns={4} padded>
			<Grid.Column textAlign="center">
				<Header as="h2">Add New</Header>
				<Form onSubmit={handleLocalSubmit}>
					<Form.Field>
						<label>Name</label>
						<input
							placeholder="Name"
							name="name"
							value={fillForm.name}
							onChange={handleForm}
						/>
					</Form.Field>

					<Form.Field>
						<label>Image URL</label>
						<input
							placeholder="Image URL"
							name="image"
							value={fillForm.image}
							onChange={handleForm}
						/>
					</Form.Field>

					<Form.Field>
						<label>Specialty</label>
						<input
							placeholder="Specialty"
							name="specialty"
							value={fillForm.specialty}
							onChange={handleForm}
						/>
					</Form.Field>

					<Form.Field>
						<label>Weight</label>
						<input
							placeholder="Weight"
							name="weight"
							value={fillForm.weight}
							onChange={handleForm}
						/>
					</Form.Field>

					<Form.Field>
						<label>Highest medal achieved</label>
						<input
							placeholder="Highest medal achieved"
							name="highest medal achieved"
							value={fillForm["highest medal achieved"]}
							onChange={handleForm}
						/>
					</Form.Field>

					<Form.Field>
						<label>Greased</label>
						<input
							//label="Greased"
							onChange={handleForm}
							checked={fillForm.greased}
							type="checkbox"
							name="greased"
						/>
					</Form.Field>

					<Button type="submit">Submit</Button>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default AddForm;
{
	/* <Grid.Row centered>
<Grid.Column width={6}>
    <Form>
        <Form.Field>
            <Form.Input label="Email Address" placeholder="name@example.com" />
        </Form.Field>
        <Form.Field>
            <Form.Input label="Email Address" placeholder="name@example.com" />
        </Form.Field>
        <Form.Field>
            <Form.Input label="Email Address" placeholder="name@example.com" />
        </Form.Field>
    </Form>
</Grid.Column>
</Grid.Row> */
}
