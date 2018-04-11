import React from "react";
import "./Wrapper.css";

//functional/stateless component
//this component creates a dinamic wrapper in the UI
const Wrapper = props => (
<div className={`wrapper${props.fluid ? "-fluid" : ""}`}>
{props.children}
</div>
);
export default Wrapper;