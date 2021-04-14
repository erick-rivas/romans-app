import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Romans from "components/romans/Romans";
import Examples from "seed/examples/components/Examples"
import css from "resources/css/App.module.css";

const App = () =>
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/romans" component={Romans} />
        <Route path="/examples" component={Examples} />
      </Switch>
    </BrowserRouter>
  </div>;

App.propTypes = {};

export default App;