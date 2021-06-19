import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

class App extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    let savedUser = localStorage.getItem("user");
    if (savedUser && Object.keys(this.state.user).length === 0) {
      this.setUserState(JSON.parse(savedUser).user);
    }
  }

  setUserState = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <Router>
        <div>
          {/* <h1>This Navbar</h1> */}
          <Switch>
            <Route path={"/"} exact>
              <Homepage user={this.state.user} />
            </Route>
            <Route path={"/login"}>
              <Login setUserState={this.setUserState} />
            </Route>
            <Route path={"/signup"}>
              <SignUp setUserState={this.setUserState} />
            </Route>
            <Route path={"/about-us"}>This is about us</Route>
            <Route path={"/contact-us"}>This is contact us</Route>
            <Route path={"/404"}>
              <h1>Page not found</h1>
            </Route>
            <Route path={"/**"}>
              <Redirect to={"/404"} />
            </Route>
          </Switch>
          {/* <h1>This is Footer</h1> */}
        </div>
      </Router>
    );
  }
}

export default App;
