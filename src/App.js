import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Posts from './pages/posts/'
import Home from './pages/home/'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
