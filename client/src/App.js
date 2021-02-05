import React, { useContext, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Provider as ThreadProvider } from "./context/ThreadContext";
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
          exact
          path="/"
          render={() =>
            state.token !== null ? (
              <HomePage />
            ) : (
              <Redirect from="/" to="/signin" />
            )
          }
        />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={SigninPage} />
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
