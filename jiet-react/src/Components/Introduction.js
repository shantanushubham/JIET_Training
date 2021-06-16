import React from "react";

const Introduction = (props) => {
  return (
    <>
      <h3>Introduction</h3>
      <p>
        Hi! I am {props.name} I work for {props.company}. I am from{" "}
        {props.state}.
        <br />I love eating food like Daal Baati (Churma), Biryani, and any
        other food that tastes great.
      </p>
    </>
  );
};

export default Introduction;
