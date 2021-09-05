import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";
import "semantic-ui-css/semantic.min.css";
import AddForm from "./AddForm";
import hogs from "../porkers_data";

function App() {
	const [addForm, setAddForm] = useState(hogs);
	function handleSubmit(e) {
		setAddForm([...addForm, e]);
	}
	return (
		<div className="App">
			<Nav />
			<Tiles hogs={addForm} />
			<AddForm handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
