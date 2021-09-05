import React from "react";
import { Button } from "semantic-ui-react";

const GreasedButton = ({ GreasedFilter }) => (
	<Button size="large" onClick={GreasedFilter}>
		Greased
	</Button>
);

export default GreasedButton;
