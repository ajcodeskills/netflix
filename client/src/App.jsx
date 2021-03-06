import "./App.scss";
import { Home } from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register" exact>
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login" exact>
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movies" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
