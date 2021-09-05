import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import Details from "./Details";

function Tile({ hogDetails }) {
	const [details, setDetails] = useState(false);

	function viewDetails() {
		setDetails(!details);
	}
	return (
		<>
			<Card centered onClick={viewDetails}>
				<Image src={hogDetails.image} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{hogDetails.name}</Card.Header>
				</Card.Content>
				{details ? <Details hogDetails={hogDetails} /> : null}
			</Card>
		</>
	);
}
export default Tile;
