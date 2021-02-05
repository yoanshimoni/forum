import React from "react";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Error from "./components/Error";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider as ThreadProvider } from "./context/ThreadContext";
import { Provider as AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route component={Error} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default () => {
  return (
    <AuthProvider>
      <ThreadProvider>
        <App />
      </ThreadProvider>
    </AuthProvider>
  );
};
