import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function Details({ hogDetails }) {
	return (
		<>
			<Card.Description>
				Specialty: {hogDetails.specialty}
			</Card.Description>
			<Card.Description>
				{hogDetails.greased ? "Greased" : null}
			</Card.Description>
			<Card.Description>Weight: {hogDetails.weight}</Card.Description>
		</>
	);
}
export default Details;
