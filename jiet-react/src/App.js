import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Test from "./Components/Test";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <h1>This Navbar</h1> */}
          <Switch>
            <Route path={"/"} exact>
              <h1>This is Homepage</h1>
            </Route>
            <Route path={"/login"}>
              <h1>This is Login</h1>
            </Route>
            <Route path={"/signup"}>
              <h1>This is SignUp</h1>
              <img
                src={
                  "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                }
              />
            </Route>
            <Route path={"/about-us"}>This is about us</Route>
            <Route path={"/contact-us"}>This is contact us</Route>
            <Route path={"/404"}>
              <h1>Page not found</h1>
            </Route>
            <Route path={"/test"}>
              <Test />
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
