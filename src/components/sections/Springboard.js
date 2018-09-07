/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React  from "react";
import { ActionButton } from "components/modules";

import "styles/2-sections/springboard.css";

class Springboard extends React.Component {

	render() {
		return (
			<div className={"main-container"}>
				<div className={"wrap-container"}>
					<form className={"wrap-form"} onSubmit={this.onSubmit}>
						<h1 className={"wrap-title"} style={{ margin: "48px 0 0"}}>
							{"Ethereum & Smart Contracts In Iasi"}
						</h1>
						<h1 className={"wrap-subtitle"}>
							{"18 Oct 2018"}
						</h1>
						<span className={"wrap-text"} style={{ marginTop: "16px"}}>
							{"Gentle Introduction to Ethereum, Smart Contracts and Incentive Alignments"}
						</span>
						<div style={{ flexGrow: 1}}/>
						<ActionButton
							text={"Register"}
							loading={false}
							link={"https://www.eventbrite.com/edit?eid=49893949145&preview=1#preview"}
						/>
						<div style={{ height: "16px" }}/>
					</form>

					<img src={require("assets/images/ethereum-logo-portrait.png")} alt={"Ethereum Logo"}/>
				</div>
			</div>
		);
	}
}

export default Springboard;