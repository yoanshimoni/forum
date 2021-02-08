import React, { useContext, useEffect } from "react";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Provider as ThreadProvider } from "./context/ThreadContext";
import { Provider as MessageProvider } from "./context/MessageContext";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./context/AuthContext";

const App = () => {
  const { state, localSign } = useContext(AuthContext);
  useEffect(() => {
    localSign();
  }, []);

  if (state.isLoading) {
    return <h2>Loading local sign...</h2>;
  }

  return (
    <BrowserRouter>
      <main>
        <Route
          path="/"
          render={() => state.token === null && <Redirect to="/signin" />}
        />
        {state.token === null ? (
          <Switch>
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/signin" component={SigninPage} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/messages" component={MessagePage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        )}
      </main>
    </BrowserRouter>
  );
};

export default () => {
  return (
    <MessageProvider>
      <AuthProvider>
        <ThreadProvider>
          <App />
        </ThreadProvider>
      </AuthProvider>
    </MessageProvider>
  );
};
