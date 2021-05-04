import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";

const Main = () => {
  return (
    <main>
      Main
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
