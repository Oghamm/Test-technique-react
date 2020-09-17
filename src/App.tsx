import React from 'react';
import Home from './pages/Home';
import Todos from "./pages/Todos";
import Notfound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path={"/"} component ={Home}/>
      <Route exact path={"/home"}   component ={Home}/>
      <Route exact path={"/todos"}   component={Todos}/>
      <Route path={""} component={Notfound}/>
    </Switch>
  </Router>
);

export default App;
