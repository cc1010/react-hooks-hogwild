import React from "react";
import { Button } from "semantic-ui-react";

const GreasedButton = ({ GreasedFilter, greasedStatus }) => (
	<Button size="large" onClick={GreasedFilter}>
		{greasedStatus ? "Greased" : "not greased"}
	</Button>
);

export default GreasedButton;
