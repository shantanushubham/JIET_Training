import React from "react";
import "../css/auth.css";
import Axios from "axios";

class SignUp extends React.Component {
  state = { user: {} };

  onSubmitClick = async (event) => {
    event.preventDefault();
    console.log(this.state.user);
    await Axios.post("http://localhost:7000/signup", this.state.user)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className={"section"}>
        <form className={"ui form"}>
          <h4 className={"ui dividing header"}>SignUp</h4>
          <div className={"field"}>
            <label>First Name</label>
            <div className={"two-fields"}>
              <div className={"field"}>
                <input
                  type={"text"}
                  placeholder={"First Name *"}
                  onChange={(e) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        firstName: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className={"field"}>
                <input
                  type={"text"}
                  placeholder={"Last Name *"}
                  onChange={(e) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        lastName: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className={"field"}>
                <input
                  type={"email"}
                  placeholder={"Email *"}
                  onChange={(e) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        email: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className={"field"}>
                <input
                  type={"password"}
                  placeholder={"Password *"}
                  onChange={(e) => {
                    this.setState({
                      user: {
                        ...this.state.user,
                        password: e.target.value,
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <button className={"ui primary button"} onClick={this.onSubmitClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
