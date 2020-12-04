import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Hello from '../pages/Hello';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/hello">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
