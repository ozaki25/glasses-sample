import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Hello from '../pages/Hello';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact>
          <Home />
        </Route>
        <Route exact path="/home" exact>
          <Home />
        </Route>
        <Route path="/hello" exact>
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
