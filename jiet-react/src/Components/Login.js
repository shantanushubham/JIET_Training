import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
class Login extends React.Component {

  state = {
    credentials: {},
  };

  onSubmitClick = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:7000/login", this.state.credentials)
      .then(({ data }) => {
        console.info(data);
        localStorage.setItem("user", JSON.stringify(data));
        this.props.setUserState(data.user);
        this.props.history.push("/")
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.info("Login API call finished.");
      });
  };


  render() {
    

    return (
      <div className={"section"}>
        <form className={"ui form"}>
          <h4 className={"ui dividing header"}>Login</h4>
          <div className={"field"}>
            <label>Email</label>
            <div className={"two-fields"}>
              <div className={"field"}>
                <input
                  type={"email"}
                  placeholder={"Email *"}
                  onChange={(e) => {
                    this.setState({
                      credentials: {
                        ...this.state.credentials,
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
                      credentials: {
                        ...this.state.credentials,
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

export default withRouter(Login);
