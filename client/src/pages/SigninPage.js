import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/SignForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninPage = () => {
  const {
    signin,
    clearErrorMessage,
    state: { errorMessage },
  } = useContext(AuthContext);

  useEffect(() => {
    clearErrorMessage();
  }, []);

  return (
    <div>
      <h2>Sign In</h2>
      <SignForm onSubmit={signin} errorMessage={errorMessage} />
      <Link to="/signup">{"Don't have an account? go to Sign up"}</Link>
    </div>
  );
};
export default SigninPage;
