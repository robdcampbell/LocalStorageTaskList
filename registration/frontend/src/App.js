import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
