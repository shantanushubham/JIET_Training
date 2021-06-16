import React from "react";
import Introduction from "./Introduction.js";

class Test extends React.Component {

  render() {
    return (
      <div>
        <h1>Info</h1>

        <Introduction
          state={"Rajasthan"}
          company={"Amazon"}
          name={"Aryan Khandelwal"}
        />

        <h3>Basic Details</h3>
        <p>
          DOB: 18/03
          <br />
          Place: Hazaribagh, Jharkhand
          <br />
        </p>

        <h3>Technical Side</h3>
        <p>
          I am a Web Development Professional. I love to code in Java and
          JavaScript.
        </p>
      </div>
    );
  }
}

export default Test;
