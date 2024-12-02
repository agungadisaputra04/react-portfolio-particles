import React from "react";
import "./style.scss";

const pageHeader = (props) => {
  const { headerText } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
    </div>
  );
};

export default pageHeader;
