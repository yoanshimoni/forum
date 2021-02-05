import React, { useContext } from "react";
import SignForm from "../components/SignForm";
import { Context as AuthContext } from "../context/AuthContext";

const SignupPage = () => {
  const { signup } = useContext(AuthContext);

  return <SignForm onSubmit={signup} />;
};
export default SignupPage;
