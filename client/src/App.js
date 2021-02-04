import React from "react";
import HomePage from "./pages/HomePage";
import Error from "./components/Error";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider as ThreadProvider } from "./context/ThreadContext";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Error} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default () => {
  return (
    <ThreadProvider>
      <App />
    </ThreadProvider>
  );
};
