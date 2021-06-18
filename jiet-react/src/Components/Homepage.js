import React from "react";

const Homepage = (props) => {
  return (
    <div>
      <label>First Name:</label>
      {props.firstName}
      <br />
      <label>Last Name:</label>
      {props.lastName}
    </div>
  );
};

export default Homepage;
