import React from "react";
import {
	Springboard
} from "./sections";

import "styles/1-layouts/app.css";

class App extends React.Component {

	render() {
		// const props = this.props;
		return (
			<main>
				<div className={"container-fluid section-container"}>
					<Springboard/>
				</div>
			</main>
		);
	}
}

export default App;