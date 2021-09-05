import React from "react";
import { Card } from "semantic-ui-react";

function Details({ hogDetails }) {
	return (
		<>
			<Card.Description>
				Specialty: {hogDetails.specialty}
			</Card.Description>
			<Card.Description>
				{hogDetails.greased ? "Greased" : null}
			</Card.Description>
			<Card.Description>
				"Highest medal achieved": {hogDetails["highest medal achieved"]}
			</Card.Description>
			<Card.Description>Weight: {hogDetails.weight}</Card.Description>
		</>
	);
}
export default Details;
