import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";

import palette from "styles/palette";

import "styles/3-modules/action-button.css";

const ActionButton = ({text, loading, link, style}) => (
	<a className={"action-btn-container"} href={link || undefined} target={"_blank"} style={style ? style : {}}>
		<div className={"action-btn"} style={{ background: loading ? palette.eth.complementary : palette.eth.main }}>
			{loading ? <Spinner name={"circle"} color={"white"} size={32} fadeIn={"none"} /> : text}
		</div>
	</a>
);
ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	loading: PropTypes.bool
};

export default ActionButton;