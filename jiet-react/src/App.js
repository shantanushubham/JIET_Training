import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
const Login = React.lazy(() => import("./Components/Login"));
const SignUp = React.lazy(() => import("./Components/SignUp"));
const Homepage = React.lazy(() => import("./Components/Homepage"));

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser && Object.keys(user).length === 0) {
      setUser(JSON.parse(savedUser).user);
    }
  }, [user]);

  return (
    <Router>
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          {/* <h1>This Navbar</h1> */}
          <Switch>
            <Route path={"/"} exact>
              <Homepage user={user} />
            </Route>
            <Route path={"/login"}>
              <Login setUserState={setUser} />
            </Route>
            <Route path={"/signup"}>
              <SignUp setUserState={setUser} />
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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
