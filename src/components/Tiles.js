import React, { useState } from "react";
import Tile from "./Tile";
import SortButton from "./SortButton";
import GreasedButton from "./GreasedButton";
function Tiles({ hogs }) {
	//console.log(hogs);
	const [greased, setGreased] = useState(false);
	const [sort, setSort] = useState("name");

	function GreasedFilter() {
		setGreased(!greased);
	}
	function sortHogs(e) {
		e === "name" ? setSort("name") : setSort("weight");
		console.log(sort);
	}

	// greased ? hogs.filter((hog) => hog.greased == true) : null;
	const renderHogs = hogs.filter((hog) => {
		return greased ? hog.greased === true : hog;
	});

	if (sort === "name") {
		renderHogs.sort((a, b) => {
			let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	} else {
		renderHogs.sort((a, b) => {
			return a.weight - b.weight;
		});
	}

	//console.log(sortName);

	return (
		<div className="">
			<div>
				<GreasedButton GreasedFilter={GreasedFilter} />
			</div>
			<div>
				<SortButton sortHogs={sortHogs} />
			</div>

			{renderHogs.map((hog, index) => (
				<Tile key={index} hogDetails={hog} />
			))}
		</div>
	);
}
export default Tiles;
