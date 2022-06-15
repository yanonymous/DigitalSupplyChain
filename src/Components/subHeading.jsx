import react from "react";
import reactDom from "react-dom";

function SubHeading(props) {
  return (
    <div className="sub-heading">
      <h2>{props.heading}</h2>
    </div>
  );
}

export default SubHeading;