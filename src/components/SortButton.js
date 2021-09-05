import React from "react";
import { Button } from "semantic-ui-react";

function SortButton({ sortHogs }) {
	return (
		<Button.Group size="large">
			<Button onClick={(e) => sortHogs(e.target.value)} value="name">
				Name
			</Button>
			<Button.Or />
			<Button onClick={(e) => sortHogs(e.target.value)} value="weight">
				Weight
			</Button>
		</Button.Group>
	);
}
export default SortButton;
