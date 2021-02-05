import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SignForm from "../components/SignForm";
import { Context as AuthContext } from "../context/AuthContext";

const SignupPage = () => {
  const {
    signup,
    clearErrorMessage,
    state: { errorMessage },
  } = useContext(AuthContext);

  useEffect(() => {
    clearErrorMessage();
  }, []);

  return (
    <div>
      <h2>Sign Up</h2>
      <SignForm onSubmit={signup} errorMessage={errorMessage} />
      <Link to="/signin">{"Already have an account? go to Sign in"}</Link>
    </div>
  );
};
export default SignupPage;
